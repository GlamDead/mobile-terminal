import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MainComponent } from './main.component';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  declarations: [MainComponent, HeaderComponent],
  imports: [BrowserModule],
  providers: [],
})
export class MainModule {}
