import { Component } from '@angular/core';

@Component({
  selector: 'app-deporte',
  templateUrl: './deporte.components.html',
})
export class Deporte {
  public deportes: Array<string>;

  constructor() {
    this.deportes = [
      'Futbol',
      'Basketball',
      'Beisoball',
      'Tennis',
      'Ping Pong',
      'Pesca',
      'Beisoball',
      'Tennis',
      'Ping Pong',
      'Pesca',
    ];
  }
}
