import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import { AppComponent } from './app.component';
import { MacComponent } from './mac.component';
import { UtcDateFlowDiagramComponent } from './utc-date-flow-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    MacComponent,
    UtcDateFlowDiagramComponent,
  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
