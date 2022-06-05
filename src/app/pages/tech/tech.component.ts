import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Sections } from 'src/app/data/sections/sections';
import { Element } from '../../data/sections/sections';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {

  technology?: Element;
  subject?: BehaviorSubject<Element | null> = new BehaviorSubject<Element | null>(null);

  constructor(private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        const id = params['id'];
        this.technology = new Sections().getTechnologies().find(tech => tech.id == id);
        this.subject?.next(this.technology!);
      }
    );
  }
}
