import { Component } from '@angular/core';

@Component({
  selector: 'app-pos-neg',
  templateUrl: './positivonegativo.component.html',
  styleUrls: ['./positivonegativo.component.css'],
})
export class PositivoNegativo {
  public arrayNum: Array<number>;
  constructor() {
    this.arrayNum = [-5, 6, -9, 3];
    console.log(this.arrayNum);
  }
  agregarNum(): void {
    var numero = Math.round(Math.random() * 150) - 99;
    this.arrayNum.push(numero);
  }
}
