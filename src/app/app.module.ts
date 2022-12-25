import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserDetectionComponent } from './browser-detection/browser-detection.component';
import { MatTableModule } from '@angular/material/table';
import { MatTableComponent } from './mat-table/mat-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowserDetectionComponent,
    MatTableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
