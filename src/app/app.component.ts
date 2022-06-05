import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {
    this.sections = new Sections();
  }

  ngOnInit() {
      this.items = [
      {
        label: 'Технологии',
        items: this.generateLabels(this.sections?.getTechnologies()!, '/tech')
      },
      {
        label: 'Услуги',
        items: this.generateLabels(this.sections?.getServices()!, '/serv')
      },
      {
        label: 'Карта сайта',
        items: this.generateLabels(this.sections?.getNavigations()!, '/map')
      }
    ];
  }

  generateLabels(elements: Array<Element>, url: string) {
    let mass = new Array();
    elements.forEach(item => {
      mass.push(
        {label: item.text, icon: 'pi pi-angle-right', command: () => this.redirectTo(url, item.id)}
      );
    });
    return mass;
  }

  redirectTo(url: string, id: number) {
    this.router.navigate([url, id]);
  }
}
