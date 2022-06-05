import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CarouselModule } from 'primeng/carousel';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    AppRoutingModule
  ]
})
export class MainModule { }
