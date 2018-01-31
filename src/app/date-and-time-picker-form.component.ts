import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { IMyDateModel, IMyDpOptions } from 'mydatepicker';
import UtcHelper from './utc-helper';
import * as moment from 'moment-timezone';
import { FormControl, FormGroup } from '@angular/forms';
import { Moment } from 'moment';
import { isString } from 'util';
import { sharedStyles } from './app.styles';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';

@Component({
  selector: 'app-date-and-time-picker-form',
  encapsulation: ViewEncapsulation.None,
  template: `
    <app-mac [type]="timezone" *ngIf="validTimezoneAwareMoment">
      <div *ngIf="!errors.utcInputInvalid">
        <div
          *ngIf="form"
          [formGroup]="form"
          style="width:150px;"
        >
          <my-date-picker
            selectorWidth="100px"
            [options]="datePicker.options"
            formControlName="date"
          ></my-date-picker>
        </div>
        <div
          *ngIf="form?.value.hour"
          [formGroup]="form"
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
        <div class="dst">
          Is <a href="https://momentjs.com/docs/#/query/is-daylight-saving-time/" target="_blank">DST:</a>
          {{getIsDST() ? 'YES' : 'NO'}}
        </div>
      </div>
    </app-mac>
`,
  styles: [
    `.img { width:100%; }`,
    `.bug { color: #C60000;}`,
    `.result { margin-top:20px; }`,
    `.dst { margin-top:10px; }`,
    `.timePickerField { min-width:55px; margin-right:5px; }`,
    `.utcOffset { margin-top:30px; }`,
  ].concat(sharedStyles)
})
export class DateAndTimePickerFormComponent implements OnInit, OnChanges, OnDestroy {
  validTimezoneAwareMoment: Moment = null;
  utcResult: string;
  preDestroy = new Subject<boolean>();
  errors = {
    utcInputInvalid: false
  };
  form: FormGroup;

  datePicker: DatePickerSettings = {
    options: {
      dateFormat: 'yyyy-mm-dd',
      editableDateField: false,
      showClearDateBtn: false,
      openSelectorOnInputClick: true,
      showInputField: true,
    }
  };

  timePicker = {
    hours: Array.from(new Array(24), (val, index) => index),
    minutes: Array.from(new Array(60), (val, index) => index),
    seconds: Array.from(new Array(60), (val, index) => index),
    options: {
      dateFormat: 'HH:mm:ss'
    }
  };


  //
  // INPUTS AND OUTPUTS
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
  }

  ngOnChanges() {
    this.preDestroy.next(true);
    this.initDateAndTimePicker();
  }

  ngOnDestroy() {
   this.preDestroy.next(true);
  }

  initDateAndTimePicker() {
    console.log('initDateAndTimePicker');
    const self = this;
    if (UtcHelper.isValidJavaUTCDate(this.utcDate)) {
      this.validTimezoneAwareMoment = null;
      this.validTimezoneAwareMoment = moment(this.utcDate).tz(this.timezone);
      console.log('initDateAndTimePicker datetime:', this.validTimezoneAwareMoment.format());
      self.initDateTimePicker();
      this.errors.utcInputInvalid = false;
    } else {
      this.errors.utcInputInvalid = true;
    }
  }

  getFormattedElement(format: string) {
    return this.validTimezoneAwareMoment.format(format);
  }

  initDateTimePicker() {
    const datePickerModel = {
      date: {
        year: this.getFormattedElement('YYYY'),
        month: this.getFormattedElement('M'),
        day: this.getFormattedElement('D'),
      }
    };
    this.form = new FormGroup({
      date: new FormControl(datePickerModel),
      hour: new FormControl(this.getFormattedElement('HH')),
      minute: new FormControl(this.getFormattedElement('mm')),
      second: new FormControl(this.getFormattedElement('ss')),
    });
    this.form.valueChanges.takeUntil(this.preDestroy).subscribe((changes: DateTimeFormChange) => {
      this.utcResult = this.updateInternalMomentAndReturnUtcDate(changes);
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

  updateInternalMomentAndReturnUtcDate(change: DateTimeFormChange) {
    //
    // UPDATE DATE AND TIME
    //
    this.validTimezoneAwareMoment = moment(this.validTimezoneAwareMoment
      .year(parseInt(change.date.date.year, 10))
      .month(parseInt(change.date.date.month, 10) - 1) // http://momentjs.com/docs/#/get-set/month/ !!!!
      .date(parseInt(change.date.date.day, 10))
      .hour(parseInt(change.hour, 10))
      .minute(parseInt(change.minute, 10))
      .second(parseInt(change.second, 10))
    ).tz(this.timezone);
    console.log('updated internal datetime:', this.validTimezoneAwareMoment.format());
    //
    // BUILD NEW UTC DATE
    //
    return moment(this.validTimezoneAwareMoment).tz(this.timezone).utc().format(UtcHelper.MOMENT_UTC_FORMAT);
  }

  emitChange() {
    this.changed.emit(this.utcResult);
  }

  getUtcOffset() {
    return moment(this.validTimezoneAwareMoment).tz(this.timezone).format('ZZ');
  }

  getIsDST() {
    return moment(this.validTimezoneAwareMoment).tz(this.timezone).isDST();
  }

}

class DatePickerSettings {
  options: IMyDpOptions;
}

class DateTimeFormChange {
  date: {
    date: {
      year: string,
      month: string,
      day: string,
    }
  };
  second: string;
  hour: string;
  minute: string;
}
