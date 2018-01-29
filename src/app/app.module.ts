import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyDatePickerModule } from 'mydatepicker';
import { AppComponent } from './app.component';
import { MacComponent } from './mac.component';

@NgModule({
  declarations: [
    AppComponent,
    MacComponent,
  ],
  imports: [
    BrowserModule,
    MyDatePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
