import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TechComponent } from './tech.component';
import { FieldsetModule } from 'primeng/fieldset';
import {ChartModule} from 'primeng/chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TechFormComponent } from './tech-form/tech-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TechComponent,
    TechFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FieldsetModule,
    ChartModule,
    BrowserAnimationsModule
  ]
})
export class TechModule { }
