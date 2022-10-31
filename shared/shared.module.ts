import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
      HeaderComponent
  ],

  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],

  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
