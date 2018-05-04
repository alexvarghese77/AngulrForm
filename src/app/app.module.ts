import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonalInfoComponent } from './components/form/personal-info/personal-info.component';
import { RangeInputComponent } from './components/rangeSlider/range-input/range-input.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PersonalInfoComponent,
    RangeInputComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
