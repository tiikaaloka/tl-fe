import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SampadanaRoutingModule } from './sampadana-routing.module';
import { EditComponent } from '../edit/edit.component';


@NgModule({
  declarations: [EditComponent],
  imports: [
    CommonModule,
    SampadanaRoutingModule,
    BrowserModule /* or CommonModule */
  ]
})
export class SampadanaModule { }
