import { Component } from '@angular/core';

@Component({
  selector: 'app-num-aleat',
  templateUrl: './numeroaleat.component.html',
  styleUrls:['./numeroaleatorio.components.css']
})
export class NumeroAleatorio {
  public numeroAleatoirio: Array<number>;

  constructor() {
    this.numeroAleatoirio = [5, 7, 4, 1, 2];
  }
  generarNumero(): void {
    var num = Math.floor(Math.random() * 100);
    this.numeroAleatoirio.push(num);
  }
}
