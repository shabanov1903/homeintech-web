import { Component, OnInit } from '@angular/core';
import { Sections } from '../../data/sections/sections';
import { Element } from '../../data/sections/sections';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  sections: Array<Array<Element>> = new Array<Array<Element>>();
  names: Array<Name> = new Array<Name>();
  responsiveOptions: Array<object>;

  constructor() {
    this.responsiveOptions = [
      {
          breakpoint: '1440px',
          numVisible: 5,
          numScroll: 1,
      },
      {
          breakpoint: '1280px',
          numVisible: 4,
          numScroll: 1,
      },
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 1,
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 1,
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1,
      }
    ];
  }

  ngOnInit(): void {
    this.sections = new Sections().getAllSections();
    this.names = [
      {name: "Технологии", url: "/tech"},
      {name: "Услуги", url: "/serv"},
      {name: "Карта сайта", url: "/map"}
    ];
  }
}

interface Name {
  name: string;
  url: string;
}
