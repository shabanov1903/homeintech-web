import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechComponent } from './tech.component';
import { FieldsetModule } from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    TechComponent
  ],
  imports: [
    CommonModule,
    FieldsetModule,
    BrowserAnimationsModule
  ]
})
export class TechModule { }
