import { Component } from '@angular/core';
import { Sections } from './data/sections/sections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homeintech';

  sections?: Sections;

  constructor() {
    this.sections = new Sections();
    const k = 5;
  }
}
