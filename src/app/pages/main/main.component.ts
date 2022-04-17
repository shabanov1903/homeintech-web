import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/data/categories/categories';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public categories?: Categories;

  constructor() { }

  ngOnInit(): void {
    this.categories = new Categories();
  }
}
