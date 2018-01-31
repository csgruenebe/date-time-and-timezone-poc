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
      <h1 class="headline">UTC DateTime and TimeZone Flow Proof of Concept</h1>
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



    <div class="mt-xl"></div>
    <bdd-feature>DateTimePicker Component should be 'daylight savings time' aware</bdd-feature>
    <ul class="bdd-notes">
      <li>For e.g. Europe/Berlin TimeZone on 25th March 2018 at 02:00 a.m the time changes to <a href="https://www.timeanddate.com/time/change/germany" target="_blank">SummerTime and the clock is set to 03:00 a.m.</a></li>
      <li>For e.g. Europe/Berlin TimeZone on 28th October 2018 at 03:00 a.m the time changes to <a href="https://www.timeanddate.com/time/change/germany" target="_blank">WinterTime and the clock is set to 02:00 a.m.</a></li>
      <li>
        At these times the timezone internally changes from <a target="_blank" href="https://www.timeanddate.com/time/zones/cet">CET</a> (UTC Offset +0100)
        to <a target="_blank" href="https://www.timeanddate.com/time/zones/cest">CEST</a> (UTC Offset +0200).
      </li>
      <li>The DateTimePicker Component consists of a DatePicker (Year, Month, Day) and a TimePicker (Hour, Minute, Second).</li>
      <li>The DateTimePicker emits a UtcResultDate String on change.</li>
    </ul>

    <bdd-scenario>TimePicker change triggers UTC Offset change (Winter to Summer)</bdd-scenario>
    <bdd-given>The Database Date is <bdd-code>2018-03-24T23:00:00.000+0000</bdd-code></bdd-given>
    <bdd-and>The TimeZone is <bdd-code>Europe/Berlin</bdd-code></bdd-and>
    <bdd-and>The DateTimePicker Component initialized to DatePicker <bdd-code>2018-03-25</bdd-code> and TimePicker <bdd-code>00:00:00</bdd-code> with UTC Offset <bdd-code>+0100</bdd-code></bdd-and>
    <bdd-when>The User changes TimePicker to <bdd-code>04:00:00</bdd-code></bdd-when>
    <bdd-then>The UTC Offset changes to <bdd-code>+0200</bdd-code></bdd-then>
    <bdd-and>The UtcResultDate emitted is <bdd-code>2018-03-25T02:00:00.000+0000</bdd-code></bdd-and>

    <bdd-scenario>TimePicker change triggers UTC Offset change (Summer to Winter)</bdd-scenario>


    <bdd-scenario>DatePicker change triggers UTC Offset change (Summer to Winter)</bdd-scenario>

    <bdd-scenario>DatePicker change triggers UTC Offset change (Winter to Summer)</bdd-scenario>


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
      background-color:#268383;
      padding:20px;
    }`,
    `.headline {
      color:#fff;
      margin:0;
      font-weight:300;
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
    `.mt-m { margin-top:30px !important; }`,
    `.mt-xl { margin-top:100px !important; }`,
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
    this.form.get('selectedTimeZone').valueChanges.subscribe(() => {
      this.validUtcDateResult = null;
    });
    this.form.get('utcDate').valueChanges.subscribe(change => {
      const tempDate = change + '+0000';
      if (UtcHelper.isValidJavaUTCDate(tempDate)) {
        this.validUtcDateResult = null;
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
