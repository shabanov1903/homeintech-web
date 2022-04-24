import images from './images.json';

export class Images {
  private images: Array<Image>

  constructor() {
    this.images = images.data;
  }

  public getText(id: number) : string {
    const text = this.images.find(x => x.id === id)?.text;
    return text ? text : '';
  }

  public getPaths() : Array<string> {
    return this.images.map(x => x.path);
  }
}

interface Image {
  id: number;
  path: string;
  text: string;
}
