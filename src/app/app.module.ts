import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPrintModule } from 'ngx-print';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { M1Component } from './m1/m1.component';
import { TableComponent } from './components/table/table.component';
import { FormsModule } from '@angular/forms';
import { FloatpopComponent } from './components/floatpop/floatpop.component';
import { M2Component } from './m2/m2.component';
import { ModelComponent } from './components/model/model.component';
import { M1TwoComponent } from './m1-two/m1-two.component';
import { InstructionComponent } from './instruction/instruction.component';
import * as CanvasJSAngularChart from './canvasjs.angular.component';
import { HeaderComponent } from './components/header/header.component';
import { NewpageComponent } from './newpage/newpage.component';
import { NgSelect2Module } from 'ng-select2';
let CanvasJSChart = CanvasJSAngularChart.CanvasJSChart;


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    M1Component,
    TableComponent,
    FloatpopComponent,
    M2Component,
    ModelComponent,
    M1TwoComponent,
    InstructionComponent,
    CanvasJSChart,
    HeaderComponent,
    NewpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPrintModule,
    FormsModule,
    NgSelect2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
