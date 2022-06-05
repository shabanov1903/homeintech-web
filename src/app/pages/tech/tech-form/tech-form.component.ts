import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Element } from 'src/app/data/sections/sections';

@Component({
  selector: 'app-tech-form',
  templateUrl: './tech-form.component.html',
  styleUrls: ['./tech-form.component.scss']
})
export class TechFormComponent {

  @Input() $technology?: Observable<Element | null> = new Observable<Element | null>();

  data: any;
  config: any;
  options: any;

  constructor() { }

  ngOnInit() {
    this.data = {
      datasets: [{
        label: 'My First Dataset',
        data: [90, 10],
        backgroundColor: ['blue', 'white']
      }]
    };
    this.options = {
      borderWidth: 10
    };
    this.config = {
      type: 'doughnut',
      data: this.data,
      options: this.options
    };
  }
}
