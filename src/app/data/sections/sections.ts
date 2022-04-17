import sections from './sections.json';

export class Sections {
  private sections: Array<Section>

  constructor() {
    this.sections = sections.data;
  }

  getSections() : Array<Section> {
    return this.sections;
  }
}

interface Section {
  id: number;
  text: string;
  path: string;
}
