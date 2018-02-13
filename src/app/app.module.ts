import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { LoadingModule } from 'ngx-loading';

import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';

import { AppComponent } from './app.component';
import { EcoComponent } from './eco/eco.component';
import { EcoSheetComponent } from './eco-sheet/eco-sheet.component';
import { EcoService } from './eco.service';

@NgModule({
  declarations: [
    AppComponent,
    EcoComponent,
    EcoSheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    LoadingModule,
    TableModule,
    TabViewModule
  ],
  providers: [EcoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
