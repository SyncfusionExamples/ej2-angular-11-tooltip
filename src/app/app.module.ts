
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Syncfusion ej2-angular-popups module
import { TooltipModule } from '@syncfusion/ej2-angular-popups';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, TooltipModule ], //declaration of TooltipModule module into NgModule
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }