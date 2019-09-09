import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ZtGridModule} from './zt-grid/zt-grid.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ZtGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
