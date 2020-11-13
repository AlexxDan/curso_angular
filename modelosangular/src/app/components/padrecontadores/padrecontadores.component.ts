import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padrecontadores',
  templateUrl: './padrecontadores.component.html',
  styleUrls: ['./padrecontadores.component.css']
})
export class PadrecontadoresComponent implements OnInit {

  public numeros:Array<number>;
  public mensaje:string;

  constructor() { 
    this.numeros=[6,7,9,18];
  }

  recibirIdContador( event ){
    //Utilizamos event directamento porque vamos a recibir un numer  (idContador)
this.mensaje="Contador incrementando: "+event;
  }

  ngOnInit(): void {
  }

}
