import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EcoComponent } from './eco/eco.component';
import { EcoService } from './eco.service';
import { EcoFilterPipe } from './eco-filter.pipe';

import { HttpClientModule } from '@angular/common/http';
import { EcoSheetComponent } from './eco-sheet/eco-sheet.component';

@NgModule({
  declarations: [
    AppComponent,
    EcoComponent,
    EcoFilterPipe,
    EcoSheetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [EcoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
