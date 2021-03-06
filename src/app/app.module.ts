import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import { AppComponent } from './app.component';
import { PcComponent } from './pc.component';
import { UtcDateFlowDiagramComponent } from './utc-date-flow-diagram.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DateAndTimePickerFormComponent } from './date-and-time-picker-form.component';
import { BddWhenComponent } from './bdd/bdd-when.component';
import { BddThenComponent } from './bdd/bdd-then.component';
import { BddAndComponent } from './bdd/bdd-and.component';
import { BddScenarioComponent } from './bdd/bdd-scenario.component';
import { BddGivenComponent } from './bdd/bdd-given.component';
import { BddFeatureComponent } from './bdd/bdd-feature.component';
import { BddCodeComponent } from './bdd/bdd-code.component';
import { BddDiscuss } from './bdd/bdd-discuss.component';

@NgModule({
  declarations: [
    AppComponent,
    PcComponent,
    UtcDateFlowDiagramComponent,
    DateAndTimePickerFormComponent,
    BddScenarioComponent,
    BddAndComponent,
    BddThenComponent,
    BddWhenComponent,
    BddGivenComponent,
    BddFeatureComponent,
    BddCodeComponent,
    BddDiscuss,
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
