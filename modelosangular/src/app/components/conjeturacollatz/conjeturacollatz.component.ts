import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-conjeturacollatz',
  templateUrl: './conjeturacollatz.component.html',
  styleUrls: ['./conjeturacollatz.component.css'],
})
export class ConjeturacollatzComponent implements OnInit {
  public numero: number;
  public arrayCollatz: Array<number>;

  constructor(private _activeRouter: ActivatedRoute) {
    this.numero = 0;
    this.arrayCollatz = [];
  }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params) => {
      console.log(params.num);
      this.numero = parseInt(params.num);

      this.calcularCollatz();
    });
  }

  calcularCollatz() {
    this.arrayCollatz = [];

    while (this.numero > 1) {
      for (let i = 0; i < this.numero; i++) {
        if (this.numero % 2 == 0) {
          this.numero = this.numero / 2;
        } else {
          this.numero = this.numero * 3 + 1;
        }
        this.arrayCollatz.push(this.numero);
        console.log(this.numero);
      }
    }
    console.log(this.arrayCollatz);
  }
}
