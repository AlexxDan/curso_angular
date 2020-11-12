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
    this.numero=0;
    this.arrayCollatz=[];
  }

  ngOnInit(): void {    
    this._activeRouter.params.subscribe((params: Params) => {
     
        this.numero = parseInt(params.num);
        console.log(this.numero+"    "+ params.num);
        this.calcularCollatz();
          
    });
  }

  calcularCollatz() {
    this.arrayCollatz=[];
   var num=this.numero;
    var calculo = 0;
    while (num > 1) {
      console.log(num);
       if (num % 2 == 0) {
        calculo = num / 2;
        this.arrayCollatz.push(calculo);
        num = calculo;
      } else if (num % 2 == 0) {
        calculo = (num * 3 )+ 1;
        this.arrayCollatz.push(calculo);
        num = calculo;
      }
    }
    console.log(this.arrayCollatz);
  }
}
