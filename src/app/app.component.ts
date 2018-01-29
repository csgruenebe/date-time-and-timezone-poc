import { Component } from '@angular/core';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import * as moment from 'moment-timezone';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
      <h1>
        Date Time Zone PoC
      </h1>
    </div>

    Used Frameworks 
    - <a href="https://momentjs.com/">Moment</a>
    - <a href="https://momentjs.com/timezone/">Moment Timezone</a>
    - <a href="https://github.com/kekeh/mydatepicker">kekeh/mydatepicker</a>
    
    <h2>Summertime</h2>

    <p>On 25-03-2018 at 02:00 a.m time changes to SummerTime in Europe/Berlin/CET meaning the Clock is set to 03:00 a.m.</p>
    <p>That means internally the Timezone changes from MEZ (UTC+1:00) to MESZ(UTC+2:00).</p>
    
    
    
    <my-date-picker [options]="myDatePickerOptions"
                    (dateChanged)="onDateChanged($event)"></my-date-picker>
    
    <br>
    NewYork: {{getNewYork()}}

    <br>
    Berlin: {{getBerlin()}}
    
    <br>
    Berlin HH:mm:ss: {{getBerlinHoursMinutesSeconds()}}
  `,
  styles: [
    '.foo {}',
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

  getNewYork() {
    return this.jun.clone().tz('America/New_York').format();
  }

  getBerlin() {
    return this.jun.clone().tz('Europe/Berlin').format();
  }

  getBerlinHoursMinutesSeconds() {
    return this.jun.clone().tz('Europe/Berlin').format('HH:mm:ss');
  }
}
