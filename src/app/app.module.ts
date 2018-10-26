import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementLeftComponent } from './element-left/element-left.component';
import { TemperaturComponent } from './element-right/temperatur/temperatur.component';
import { TeddyBearComponent } from './element-right/teddy-bear/teddy-bear.component';
import { ResortComponent } from './element-left/resort/resort.component';
import { ResortsFilterPipe } from './resorts-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ElementLeftComponent,
    TemperaturComponent,
    TeddyBearComponent,
    ResortComponent,
    ResortsFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
