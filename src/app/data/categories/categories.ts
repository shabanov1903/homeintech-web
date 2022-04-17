import categories from './categories.json';

export class Categories {
  private categories: Array<Category>

  constructor() {
    this.categories = categories.data;
  }

  getCategories() : Array<Category> {
    return this.categories;
  }
}

interface Category{
  text: string;
  img: string;
}
