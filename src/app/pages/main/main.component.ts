import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/data/categories/categories';
import { Images } from 'src/app/data/images/images';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public categories?: Categories;
  public images?: Images;

  constructor() { }

  ngOnInit(): void {
    this.categories = new Categories();
    this.images = new Images();
  }
}
