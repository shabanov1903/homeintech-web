import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { Sections } from './data/sections/sections';
import { Element } from './data/sections/sections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'homeintech';

  sections?: Sections;

  items: MenuItem[] = new Array();

  constructor() {
    this.sections = new Sections();
  }

  ngOnInit() {
      this.items = [
      {
        label: 'Технологии',
        items: this.generateLabels(this.sections?.getTechnologies()!)
      },
      {
        label: 'Услуги',
        items: this.generateLabels(this.sections?.getServices()!)
      },
      {
        label: 'Карта сайта',
        items: this.generateLabels(this.sections?.getNavigations()!)
      }
    ];
  }

  generateLabels(elements: Array<Element>) {
    let mass = new Array();
    elements.forEach(item => {
      mass.push(
        {label: item.text, icon: 'pi pi-angle-right', command: () => this.redirectTo(item.id.toString())}
      );
    });
    return mass;
  }

  redirectTo(url: string) {
    console.log(url);
  }
}
