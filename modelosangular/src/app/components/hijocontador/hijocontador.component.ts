import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijocontador',
  templateUrl: './hijocontador.component.html',
  styleUrls: ['./hijocontador.component.css']
})
export class HijocontadorComponent implements OnInit {

  @Input() inicio:number;
  @Input() idContador:number;

  //Declaramos un metodo para poder devolver la informacion al padre
  @Output() recibirIdContador = new EventEmitter();

  //variable para saber en que numero esta el contador
  public numero:number;
  public mensaje:string;

  //Realizamos la llamada al padre cuando deseemos
  //el metoodo de llamada del hijo tambien tiene que recibir event
  //aunque no lo utilicemos
  incrementarContador(event){
    this.numero=this.numero+1;
    this.mensaje="Contador en "+this.numero;
  
    this.recibirIdContador.emit(this.idContador);
  }

  constructor() { }

  ngOnInit(): void {
    //El padre nos dira el inicio y el id
    this.numero=this.inicio;
    this.mensaje="Contador id :" +this.idContador+" ,Valor inicial "+this.inicio;
  }

}
