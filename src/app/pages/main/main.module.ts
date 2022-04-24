import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CardModule } from 'src/app/components/card/card.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    NgbCarouselModule
  ]
})
export class MainModule { }
