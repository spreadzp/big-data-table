import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTableComponent } from './components/main-table/main-table.component';
import { SpreadTableComponent } from './components/spread-table/spread-table.component';
import { DataService } from './services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    MainTableComponent,
    SpreadTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule
  ],
  exports: [
    MatTableModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
