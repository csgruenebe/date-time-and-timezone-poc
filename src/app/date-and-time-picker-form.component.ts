import { Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { IMyDateModel, IMyDpOptions } from 'mydatepicker';
import UtcHelper from './utc-helper';
import * as moment from 'moment-timezone';
import { FormControl, FormGroup } from '@angular/forms';
import { Moment } from 'moment';
import { isString } from 'util';
import { sharedStyles } from './app.styles';

@Component({
  selector: 'app-date-and-time-picker-form',
  encapsulation: ViewEncapsulation.None,
  template: `
    <app-mac [type]="timezone">
      <div *ngIf="!errors.utcInputInvalid">
        <div
          *ngIf="datePicker?.formGroup"
          [formGroup]="datePicker.formGroup"
          style="width:150px;"
        >
          <my-date-picker
            selectorWidth="100px"
            [options]="datePicker.options"
            formControlName="date"
          ></my-date-picker>
        </div>
        <div
          *ngIf="timePicker?.formGroup?.value.hour"
          [formGroup]="timePicker.formGroup"
          style="width:150px; margin-top:20px; display:flex; align-items: center;"
        >
          <select formControlName="hour" class="sharedSelect timePickerField">
            <option
              [value]="prefixWithZero(hour)"
              *ngFor="let hour of timePicker.hours"
            >{{prefixWithZero(hour)}}</option>
          </select>
          <select formControlName="minute" class="sharedSelect timePickerField">
            <option
              [value]="prefixWithZero(minute)"
              *ngFor="let minute of timePicker.minutes"
            >{{prefixWithZero(minute)}}</option>
          </select>
          <select formControlName="second" class="sharedSelect timePickerField">
            <option
              [value]="prefixWithZero(second)"
              *ngFor="let second of timePicker.seconds"
            >{{prefixWithZero(second)}}</option>
          </select>
          <span>&nbsp;(HH:mm:ss)</span>
        </div>
        <div class="utcOffset">
          UTC Offset: {{getUtcOffset()}}
        </div>
      </div>
    </app-mac>
`,
  styles: [
    `.img { width:100%; }`,
    `.result { margin-top:20px; }`,
    `.timePickerField { min-width:55px; margin-right:5px; }`,
    `.utcOffset { margin-top:30px; }`,
  ].concat(sharedStyles)
})
export class DateAndTimePickerFormComponent implements OnInit, OnChanges {
  validTimezoneAwareMoment: Moment = null;
  utcResult: string;
  errors = {
    utcInputInvalid: false
  };
  datePicker: DatePickerSettings = {
    options: {
      dateFormat: 'yyyy-mm-dd',
      editableDateField: false,
      showClearDateBtn: false,
      openSelectorOnInputClick: true,
      showInputField: true,
    },
    formGroup: new FormGroup({
      date: new FormControl(null)
    }),
  };

  timePicker = {
    hours: Array.from(new Array(24), (val, index) => index),
    minutes: Array.from(new Array(60), (val, index) => index),
    seconds: Array.from(new Array(60), (val, index) => index),
    options: {
      dateFormat: 'HH:mm:ss'
    },
    formGroup: new FormGroup({
      hour: new FormControl(null),
      minute: new FormControl(null),
      second: new FormControl(null),
    }),
  };


  //
  // IMPUTS AND OUTPUTS
  //
  @Input()
  utcDate: string; // e.g. '2018-08-20T12:00:00.000+0000'

  @Input()
  timezone: string; // e.g. 'Europe/Berlin'

  @Output()
  changed = new EventEmitter<string>(); // e.g. '2018-08-20T12:00:00.000+0000'

  //
  // METHODS
  //
  ngOnInit() {
    this.initDateAndTimePicker();
    this.initChangeListener();
  }

  ngOnChanges() {
    console.log('ngOnChanges');
    if (this.utcDate !== this.utcResult) {
      this.initDateAndTimePicker();
    }
  }

  initDateAndTimePicker() {
    if (UtcHelper.isValidJavaUTCDate(this.utcDate)) {
      this.validTimezoneAwareMoment = moment(this.utcDate).tz(this.timezone);
      this.initDatePicker();
      this.initTimePicker();
      this.errors.utcInputInvalid = false;
    } else {
      this.errors.utcInputInvalid = true;
    }
  }

  initDatePicker() {
    const datePickerModel = {
      date: {
        year: parseInt(this.validTimezoneAwareMoment.format('YYYY'), 10),
        month: parseInt(this.validTimezoneAwareMoment.format('M'), 10),
        day: parseInt(this.validTimezoneAwareMoment.format('D'), 10),
      }
    };
    this.datePicker.formGroup.get('date').setValue(datePickerModel);
  }

  initTimePicker() {
    this.timePicker.formGroup.get('hour').setValue(this.validTimezoneAwareMoment.format('HH'));
    this.timePicker.formGroup.get('minute').setValue(this.validTimezoneAwareMoment.format('mm'));
    this.timePicker.formGroup.get('second').setValue(this.validTimezoneAwareMoment.format('ss'));
  }

  initChangeListener() {
    console.log('initChangeListener');
    this.datePicker.formGroup.get('date').valueChanges.subscribe((changes: FormDate) => {
      this.utcResult = this.buildJavaUtcResultDate(this.timePicker.formGroup.value, changes);
      this.emitChange();
    });
    this.timePicker.formGroup.valueChanges.subscribe((changes: FormTime) => {
      this.utcResult = this.buildJavaUtcResultDate(changes, this.datePicker.formGroup.value.date);
      this.emitChange();
    });
  }

  prefixWithZero(num: number|string) {
    let temp = 0;
    if (isString(num)) {
      temp = parseInt(num as string, 10);
    } else {
      temp = num as number;
    }
    return temp < 10 ? `0${temp}` : `${temp}`;
  }

  buildJavaUtcResultDate(time: FormTime, date: FormDate) {
    const tz = this.validTimezoneAwareMoment.format('ZZ');
    const dateStringInCurrentTimeZone = `${date.date.year}-${this.prefixWithZero(date.date.month)}-${this.prefixWithZero(date.date.day)}T${time.hour}:${time.minute}:${time.second}.000${tz}`;
    return moment(dateStringInCurrentTimeZone).utc().format(UtcHelper.MOMENT_UTC_FORMAT);
  }

  emitChange() {
    // ONLY EMIT IF INPUT IS DIFFERENT THAN OUTPUT
    if (this.utcDate !== this.utcResult) {
      this.changed.emit(this.utcResult);
    }
  }

  getUtcOffset() {
    return this.validTimezoneAwareMoment.format('ZZ');
  }

}

class DatePickerSettings {
  options: IMyDpOptions;
  formGroup: FormGroup;
}

class FormTime {
  second: string;
  hour: string;
  minute: string;
}

class FormDate {
  date: {
    year: string,
    month: string,
    day: string,
  };
}
