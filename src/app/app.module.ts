import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import { AppComponent } from './app.component';
import { MacComponent } from './mac.component';
import { UtcDateFlowDiagramComponent } from './utc-date-flow-diagram.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateAndTimePickerFormComponent } from './date-and-time-picker-form.component';

@NgModule({
  declarations: [
    AppComponent,
    MacComponent,
    UtcDateFlowDiagramComponent,
    DateAndTimePickerFormComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    MyDatePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
