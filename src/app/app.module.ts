import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EcoComponent } from './eco/eco.component';
import { EcoService } from './eco.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EcoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [EcoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
