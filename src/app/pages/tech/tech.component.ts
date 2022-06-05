import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Sections } from 'src/app/data/sections/sections';
import { Element } from '../../data/sections/sections';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  technology?: Element;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.technology = new Sections().getTechnologies().find(tech => tech.id == id);
      }
    );
  }

  ngOnInit(): void { }
}
