import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment-timezone';
import UtcHelper from './utc-helper';
import { isNullOrUndefined } from 'util';
import { sharedStyles } from './app.styles';

@Component({
  selector: 'app-root',
  template: `
  <div class="header">
    <div class="container">
      <h1 class="headline">UTC Date Time and Timezone Flow Proof of Concept</h1>
    </div>
  </div>
  <div class="container">

    <div class="row">
      <div class="col">
        <app-utc-date-flow-diagram style="width:80%;"></app-utc-date-flow-diagram>
      </div>
    </div>

    <div class="row mt-m">
      <div class="col">
        <div>
          <h3>1. Set UTC DateTime in Database</h3>
          <app-mac type="Database">
            <form [formGroup]="form" class="form">
              <div class="fieldlabel">UTC</div>
              <input
                class="sharedField"
                [class.sharedFieldHasError]="errorUtcDate"
                style="width:195px" type="text" formControlName="utcDate" />
              <div class="fieldafter">
                +0000
              </div>
            </form>
            <div class="errorUtcDate" *ngIf="errorUtcDate">
              Not a valid UTC Date in form of <br>2018-08-20T12:00:00.000+0000
            </div>
          </app-mac>
        </div>
      </div>
      <div class="col">
        <div [formGroup]="form">
          <h3>2. Select TimeZone</h3>
          <select
            formControlName="selectedTimeZone"
            class="sharedSelect timeZoneSelect">
            <option
              [value]="availableTimeZone.tz"
              *ngFor="let availableTimeZone of availableTimeZonesAndDateFormats"
            >{{availableTimeZone.tz}}</option>
          </select>
        </div>
      </div>
      <div class="col">
        <div>
          <h3>3. Use DatePicker</h3>
          <app-date-and-time-picker-form
            *ngIf="form?.value?.selectedTimeZone"
            [utcDate]="validUtcDate"
            [timezone]="form.value.selectedTimeZone"
            (changed)="processDateTimeChange($event)"
          ></app-date-and-time-picker-form>
        </div>
      </div>
      <div class="col">
        <div>
          <h3>4. Utc Result for DB</h3>
          <div class="utcResult">{{validUtcDateResult ? validUtcDateResult : '...' }}</div>
        </div>
      </div>
    </div>


    <h2 class="mt-xl">Daylight Saving Time</h2>

    <p>On 25-03-2018 at 02:00 a.m time changes to SummerTime in Europe/Berlin/CET meaning the Clock is set to 03:00 a.m.</p>
    <p>
      That means internally the Timezone changes from
      <a target="_blank" href="https://www.timeanddate.com/time/zones/cet">CET</a> (UTC+0100)
      to <a target="_blank" href="https://www.timeanddate.com/time/zones/cest">CEST</a> (UTC+0200).
    </p>

    <div style="margin-top:200px;">
      Used Frameworks
      - <a href="https://momentjs.com/">Moment</a>
      - <a href="https://momentjs.com/timezone/">Moment Timezone</a>
      - <a href="https://github.com/kekeh/mydatepicker">kekeh/mydatepicker</a>
    </div>


  </div>
  `,
  styles: [
    `.header {
      background-color:#407F7F;
      padding:20px;
    }`,
    `.headline {
      color:#fff;
      margin:0;
    }`,
    `.container {
      max-width:1600px;
      margin: 0 auto;
      padding:20px;
    }`,
    `.form {
      display:flex;
      margin-top:6px;
      align-items: center;
    }`,
    `.fieldlabel {
      font-weight: 500;
      width:40px;
    }`,
    `.fieldafter {
      font-family: 'Roboto Mono', monospace;
      font-size:14px;
    }`,
    `.timeZoneSelect {
      max-width:180px;
      margin-top:40px;
    }`,
    `.errorUtcDate {
      background-color:#C60000;
      color:#fff;
      padding:4px;
      margin-top:5px;
    }`,
    `.utcResult { font-family: 'Roboto Mono', monospace; min-width:300px; margin-top:60px;}`,
    `.mt-m { margin-top:30px; }`,
    `.mt-xl { margin-top:100px; }`,
    `.label { width:90px; display:inline-block; }`,
    '.row { display:flex; flex-direction: row; flex-wrap: wrap; }',
    '.col { flex:1; display: flex; flex-direction: row; justify-content: center; align-items: flex-start; }',
  ].concat(sharedStyles)
})
export class AppComponent implements OnInit {
  availableTimeZonesAndDateFormats: TimeZoneAndDateFormat[] = [
    { tz: 'Europe/Berlin', formatDateAndTime: 'DD. MMM. YYYY, HH:mm' },
    { tz: 'Europe/London', formatDateAndTime: 'DD MMM YYYY, HH:mm' },
    { tz: 'America/New_York', formatDateAndTime: 'MMM DD, YYYY, hh:mm a' },
    { tz: 'Japan', formatDateAndTime: 'MMM DD, YYYY, hh:mm a' },
    { tz: 'Asia/Singapore', formatDateAndTime: 'MMM DD, YYYY, hh:mm a' },
    { tz: 'Asia/Hong_Kong', formatDateAndTime: 'MMM DD, YYYY, hh:mm a' },
  ];
  form = new FormGroup({
    utcDate: new FormControl('2018-08-20T12:00:00.000'),
    selectedTimeZone: new FormControl(null),
  });
  errorUtcDate = false;
  validUtcDate: string; // INPUT!
  validUtcDateResult: string; // OUPUT!

  ngOnInit() {
    this.form.get('utcDate').valueChanges.subscribe(change => {
      const tempDate = change + '+0000';
      if (UtcHelper.isValidJavaUTCDate(tempDate)) {
        this.validUtcDate = tempDate;
        this.errorUtcDate = false;
      } else {
        this.errorUtcDate = true;
      }
    });
    this.validUtcDate = this.form.get('utcDate').value + '+0000';
  }


  getTimeInTimeZoneWithFormat(timezone: string, format: string) {
    if (!isNullOrUndefined(this.validUtcDate)) {
      return moment(this.validUtcDate).tz(timezone).format(format);
    }
    return '';
  }

  getTimeZoneOffset(timezone: string) {
    if (!isNullOrUndefined(this.validUtcDate)) {
      return moment(this.validUtcDate).tz(timezone).format('ZZ');
    }
    return '';
  }

  processDateTimeChange(date: string) {
    if (UtcHelper.isValidJavaUTCDate(date)) {
      this.validUtcDateResult = date;
    }
  }
}


export class TimeZoneAndDateFormat {
  tz: string;
  formatDateAndTime: string;
}
