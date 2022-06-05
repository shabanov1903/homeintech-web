import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ]
})
export class MainModule { }
