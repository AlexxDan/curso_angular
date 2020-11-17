import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import{Generos} from "./../../models/genero";
import {GeneroService} from "./../../services/genero.service"
import { Router } from "@angular/router"

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'], providers: [
    GeneroService
  ]
})
export class MenuComponent implements OnInit {

  public generos: Array<Generos>;
  @ViewChild('buscarTexto') buscarPalabra:ElementRef;

  constructor(private _service:GeneroService, private _router:Router) { 
    this.generos=[];
  }

  ngOnInit(): void {
    this._service.getGeneros().subscribe(response=>{
      this.generos=response
    },error=>{
      console.log("Error al cargar los generos")
    })
  }

  buscarTitulo(){
    var palabraBuscar=this.buscarPalabra.nativeElement.value;
    var parseda=palabraBuscar.trim().replaceAll(" ","%20").toLowerCase();
    this._router.navigate(['buscar/',parseda]);
  }

}
