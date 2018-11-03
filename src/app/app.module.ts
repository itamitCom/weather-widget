import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ElementLeftComponent } from './element-left/element-left.component';
import { TemperaturComponent } from './element-right/temperatur/temperatur.component';
import { TeddyBearComponent } from './element-right/teddy-bear/teddy-bear.component';
import { ResortComponent } from './element-left/resort/resort.component';
import { ResortsFilterPipe } from './element-left/resorts-filter.pipe';
import { ElementRightComponent } from './element-right/element-right.component';
import { FirstInitDirective } from './element-left/first-init.directive';
import { ResortService } from './common/services/resort.service';
import { MenuFilterPipe } from './element-left/menu-filter.pipe';
import { PhonePipe } from './element-left/resort/phone.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ElementLeftComponent,
    TemperaturComponent,
    TeddyBearComponent,
    ResortComponent,
    ResortsFilterPipe,
    ElementRightComponent,
    FirstInitDirective,
    MenuFilterPipe,
    PhonePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      ResortService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
