import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-tablamultiplicar',
  templateUrl: './tablamultiplicar.component.html',
  styleUrls: ['./tablamultiplicar.component.css'],
})
export class TablamultiplicarComponent implements OnInit {
  @ViewChild('numero') numero: ElementRef;
  public tabla: Array<number>;
  public num: number;

  constructor() {
    this.num = 0;
    this.tabla = [];
  }

  ngOnInit(): void {}

  calcularTabla() {
    this.num = parseInt(this.numero.nativeElement.value);
    let calculo = 0;
    for (let i = 0; i < 11; i++) {
      calculo = this.num * i;
      this.tabla.push(calculo);
    }
  }
}
