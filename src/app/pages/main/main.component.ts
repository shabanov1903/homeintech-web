import { Component, OnInit } from '@angular/core';
import { Sections } from '../../data/sections/sections';
import { Element } from '../../data/sections/sections';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public sections?: Array<Array<Element>>;

  constructor() { }

  ngOnInit(): void {
    this.sections = new Sections().getAllSections();
  }
}
