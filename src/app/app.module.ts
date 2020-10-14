import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
