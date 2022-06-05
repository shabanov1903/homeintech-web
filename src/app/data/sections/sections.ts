import technologies from './data/technologies.json';
import services from './data/services.json';
import navigations from './data/navigations.json';

export class Sections {
  private technologies: Array<Element>;
  private services: Array<Element>;
  private navigations: Array<Element>;

  constructor() {
    this.technologies = technologies.technologies;
    this.services = services.services;
    this.navigations = navigations.navigations;
  }

  public getTechnologies() : Array<Element> {
    return this.technologies;
  }

  public getServices() : Array<Element> {
    return this.services;
  }

  public getNavigations() : Array<Element> {
    return this.navigations;
  }

  public getAllSections() : Array<Array<Element>> {
    let mass = new Array();
    mass.push(this.technologies);
    mass.push(this.services);
    mass.push(this.navigations);
    return mass;
  }
}

export interface Element {
  id: number;
  path: string;
  text: string;
  content: string;
}
