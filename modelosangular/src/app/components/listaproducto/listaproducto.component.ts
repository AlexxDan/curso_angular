import { Component, OnInit } from '@angular/core';
import {Producto} from "./../../models/producto";

@Component({
  selector: 'app-listaproducto',
  templateUrl: './listaproducto.component.html',
  styleUrls: ['./listaproducto.component.css']
})
export class ListaproductoComponent implements OnInit {
  public producto :Producto;
  constructor() { 
    //Cuando utlizamos modelos, se utiliza la palabra new para crear objetos
    //En el momento que ponemos en el new , entra el constructor de la clase Producto
    this.producto=new Producto("Pan", "data:image/jpeg;base64,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",8.50);
    // this.producto.nombre=;
    // this.producto.imagen=;
    // this.producto.precio=;
  }

  ngOnInit(): void {
  }

}
