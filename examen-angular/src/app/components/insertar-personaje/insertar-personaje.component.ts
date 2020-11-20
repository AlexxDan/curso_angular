import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Serie } from './../../models/serie';
import { SerieService } from './../../services/serie.service';
import { Personaje } from './../../models/personaje';
import { PersonajeService } from './../../services/personaje.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-insertar-personaje',
  templateUrl: './insertar-personaje.component.html',
  styleUrls: ['./insertar-personaje.component.css'],
})
export class InsertarPersonajeComponent implements OnInit {
  @ViewChild('cajNombre') cajNombre: ElementRef;
  @ViewChild('cajimg') cajimg: ElementRef;
  @ViewChild('selectSerie') cajSerie: ElementRef;
  public seriesSelect: Array<Serie>;

  constructor(
    private _serieSer: SerieService,
    private _personajeService: PersonajeService,
    private _router:Router
  ) {
    this.seriesSelect = [];

    this.cajNombre = ElementRef.prototype;
    this.cajimg = ElementRef.prototype;
    this.cajSerie = ElementRef.prototype;
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this._serieSer.getSeries().subscribe(
      (response) => {
        this.seriesSelect = response;
      },
      (error) => {
        console.log('Error de carga de serie para registrar');
      }
    );
  }
  registrarPersonaje() {
    var id = 1;
    var nombre = this.cajNombre.nativeElement.value;
    var img = this.cajimg.nativeElement.value;
    var seriesoptiosn = this.cajSerie.nativeElement.options;
    var idSerie = 0;
    for (var option of seriesoptiosn) {
      if (option.selected == true) {
        idSerie = parseInt( option.value);
      }
    }

    var personaje=new Personaje(id,nombre,img,idSerie);
console.log(personaje);

    this._personajeService.insertarPersonaje(personaje).subscribe(
      response=>{
         this._router.navigate(['/']);
      },error=>{
        console.log("Error al insertar");
      }
    )
  }
}
