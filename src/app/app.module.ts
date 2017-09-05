import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';


import { AppComponent } from './app.component';
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselSliderComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
