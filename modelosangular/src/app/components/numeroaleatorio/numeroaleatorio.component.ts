import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeroaleatorio',
  templateUrl: './numeroaleatorio.component.html',
  styleUrls: ['./numeroaleatorio.component.css'],
})
export class NumeroaleatorioComponent implements OnInit {
  public arrayNumero: Array<number>;

  constructor() {
    this.arrayNumero = [];
  }

  ngOnInit(): void {
    this.cargarArray();
  }

  cargarArray() {
      for (var i = 0; i < 5; i++) {
        var numero = Math.round(Math.random() * 100);
        this.arrayNumero.push(numero);
      }
    }
}
