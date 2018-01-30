import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment-timezone';
import UtcHelper from './utc-helper';
import { isNullOrUndefined } from 'util';

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

    Used Frameworks
    - <a href="https://momentjs.com/">Moment</a>
    - <a href="https://momentjs.com/timezone/">Moment Timezone</a>
    - <a href="https://github.com/kekeh/mydatepicker">kekeh/mydatepicker</a>

    <h2>Daylight Saving Time</h2>

    <p>On 25-03-2018 at 02:00 a.m time changes to SummerTime in Europe/Berlin/CET meaning the Clock is set to 03:00 a.m.</p>
    <p>
      That means internally the Timezone changes from
      <a target="_blank" href="https://www.timeanddate.com/time/zones/cet">CET</a> (UTC+0100)
      to <a target="_blank" href="https://www.timeanddate.com/time/zones/cest">CEST</a> (UTC+0200).
    </p>

    <h2 class="mt-m">Datetime Picker</h2>

    <p>
      In the Database we store our date in UTC format. But since Java has trouble with the last <code>:</code>
      in the UTC offset our format looks like so.
    </p>

    <form [formGroup]="form" class="form">
      <div class="fieldlabel">UTC Source Date:</div>
      <input
        class="field"
        [class.fieldError]="errorUtcDate"
        style="width:195px" type="text" formControlName="utcDate" />
      <div class="fieldafter">
        +0000
      </div>
      <div class="errorUtcDate" *ngIf="errorUtcDate">
        Not a valid UTC Date in form of <br>2018-08-20T12:00:00.000+0000
      </div>
    </form>

    <p>
      Now we can change the UTC Date in our Angular Component which is set to Timezone
      <strong>Europe/Berlin</strong> with current <strong>UTC Offset of {{getTimeZoneOffset('Europe/Berlin')}}</strong>:
    </p>

    <div class="row mt-m">
      <div class="col">
        <app-date-and-time-picker-form
          [utcDate]="validUtcDate"
          [timezone]="'Europe/Berlin'"
          (changed)="processDateTimeChange($event)"
        ></app-date-and-time-picker-form>
      </div>
    </div>

    <h2 class="mt-m">Date Displayed for other Time Zones</h2>
    <div class="row mt-m">
      <div class="col">
        <app-mac type="de">
          <span class="label">Timezone:</span> Europe/Berlin<br>
          <span class="label">Datetime:</span> {{getTimeInTimeZoneWithFormat('Europe/Berlin', 'DD. MMM. YYYY, HH:mm')}}<br>
          <span class="label">UTC Offset:</span> {{getTimeZoneOffset('Europe/Berlin')}}
        </app-mac>
      </div>
      <div class="col">
        <app-mac type="uk">
          <span class="label">Timezone:</span> Europe/London<br>
          <span class="label">Datetime:</span> {{getTimeInTimeZoneWithFormat('Europe/London', 'DD MMM YYYY, HH:mm')}}<br>
          <span class="label">UTC Offset:</span> {{getTimeZoneOffset('Europe/London')}}
        </app-mac>
      </div>
      <div class="col">
        <app-mac type="us">
          <span class="label">Timezone:</span> America/New_York<br>
          <span class="label">Datetime:</span> {{getTimeInTimeZoneWithFormat('America/New_York', 'MMM DD, YYYY, hh:mm a')}}<br>
          <span class="label">UTC Offset:</span> {{getTimeZoneOffset('America/New_York')}}
        </app-mac>
      </div>
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
      max-width:1300px;
      margin: 0 auto;
      padding:20px;
    }`,
    `.form {
      display:flex;
      align-items: center;
    }`,
    `.fieldlabel {
      font-weight: 500;
      width:140px;
    }`,
    `.field {
      outline:0;
      background-color:#fafafa;
      border:0;
      padding:5px;
      border-bottom:2px solid #407F7F;
      font-family: 'Roboto Mono', monospace;
      font-size:14px;
    }`,
    `.fieldError {
      border-bottom:2px solid #C60000;
    }`,
    `.fieldafter {
      font-family: 'Roboto Mono', monospace;
      font-size:14px;
    }`,
    `.errorUtcDate {
      background-color:#C60000;
      color:#fff;
      padding:4px;
      margin-left:10px;
    }`,
    `.mt-m { margin-top:30px; }`,
    `.label { width:90px; display:inline-block; }`,
    '.row { display:flex; flex-direction: row; flex-wrap: wrap; }',
    '.col { flex:1; display: flex; flex-direction: row; justify-content: center; align-items: center; }',
  ]
})
export class AppComponent implements OnInit {
  title = 'app';

  form = new FormGroup({
    utcDate: new FormControl('2018-08-20T12:00:00.000')
  });
  errorUtcDate = false;
  validUtcDate: string;

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
      this.form.get('utcDate').setValue(date.substr(0, date.length - 5));
    }
  }
}
