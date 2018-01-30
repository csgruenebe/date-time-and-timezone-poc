import { Component } from '@angular/core';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-root',
  template: `
  <h1>UTC Date Time and Timezone Flow Proof of Concept</h1>

  <div class="row">
    <div class="col">
    </div>
    <div class="col">
      <app-utc-date-flow-diagram style="width:100%;"></app-utc-date-flow-diagram>
    </div>
    <div class="col">
    </div>
  </div>

  Used Frameworks
  - <a href="https://momentjs.com/">Moment</a>
  - <a href="https://momentjs.com/timezone/">Moment Timezone</a>
  - <a href="https://github.com/kekeh/mydatepicker">kekeh/mydatepicker</a>

  <h2>Summertime</h2>

  <p>On 25-03-2018 at 02:00 a.m time changes to SummerTime in Europe/Berlin/CET meaning the Clock is set to 03:00 a.m.</p>
  <p>That means internally the Timezone changes from MEZ (UTC+1:00) to MESZ(UTC+2:00).</p>

  <h2 class="mt-m">Datetime Picker</h2>

  As source dates we use UTC dates we get from JAVA <code>2018-08-20T12:00:00.000+0000</code>

  <div class="row mt-m">
    <div class="col">
      <my-date-picker
        [options]="myDatePickerOptions"
        (dateChanged)="onDateChanged($event)"
      ></my-date-picker>
    </div>
    <div class="col">
      <input
        type="text"
      />
    </div>
  </div>
  <div class="row mt-m">
    <div class="col">
      <app-mac type="de">
        <span class="label">Timezone:</span> Europe/Berlin<br>
        <span class="label">Datetime:</span> {{getTimeInTimeZoneWithFormat('Europe/Berlin', 'DD. MMM. YYYY, HH:mm')}}<br>
        <span class="label">UTC:</span> {{getTimeZoneOffset('Europe/Berlin')}}
      </app-mac>
    </div>
    <div class="col">
      <app-mac type="uk">
        <span class="label">Timezone:</span> Europe/London<br>
        <span class="label">Datetime:</span> {{getTimeInTimeZoneWithFormat('Europe/London', 'DD MMM YYYY, HH:mm')}}<br>
        <span class="label">UTC:</span> {{getTimeZoneOffset('Europe/London')}}
      </app-mac>
    </div>
    <div class="col">
      <app-mac type="us">
        <span class="label">Timezone:</span> America/New_York<br>
        <span class="label">Datetime:</span> {{getTimeInTimeZoneWithFormat('America/New_York', 'MMM DD, YYYY, hh:mm a')}}<br>
        <span class="label">UTC:</span> {{getTimeZoneOffset('America/New_York')}}
      </app-mac>
    </div>
  </div>
  `,
  styles: [
    `.mt-m { margin-top:30px; }`,
    `.label { width:90px; display:inline-block; }`,
    '.row { display:flex; flex-direction: row; }',
    '.col { flex:1; display: flex; flex-direction: row; justify-content: center; align-items: center; }',
  ]
})
export class AppComponent {
  title = 'app';
  myDatePickerOptions: IMyDpOptions = {
    dateFormat: 'yyyy-mm-dd',
  };

  jun = moment('2014-06-01T12:00:00+00:00');
  dec = moment('2014-12-01T12:00:00+00:00');


  onDateChanged(event: IMyDateModel) {
    // event properties are: event.date, event.jsdate, event.formatted and event.epoc
  }

  getTimeInTimeZoneWithFormat(timezone: string, format: string) {
    return this.jun.clone().tz(timezone).format(format);
  }

  getTimeZoneOffset(timezone: string) {
    return this.jun.clone().tz(timezone).format('ZZ');
  }
}
