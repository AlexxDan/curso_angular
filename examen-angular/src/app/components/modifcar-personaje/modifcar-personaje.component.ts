import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Serie } from './../../models/serie';
import { SerieService } from './../../services/serie.service';
import { Personaje } from './../../models/personaje';
import { PersonajeService } from './../../services/personaje.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-modifcar-personaje',
  templateUrl: './modifcar-personaje.component.html',
  styleUrls: ['./modifcar-personaje.component.css'],
})
export class ModifcarPersonajeComponent implements OnInit {
  public personajes: Array<Personaje>;
  public series: Array<Serie>;
  @ViewChild('selectPer') selectPer: ElementRef;
  @ViewChild('selectSer') selectSer: ElementRef;
  constructor(
    private _serieSer: SerieService,
    private _personajeSer: PersonajeService,
    private _router: Router
  ) {
    this.personajes = [];
    this.series = [];
    this.selectPer = ElementRef.prototype;
    this.selectSer = ElementRef.prototype;
  }

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this._serieSer.getSeries().subscribe(
      (response) => {
        this.series = response;
      },
      (error) => {
        console.log('Error de carga serie');
      }
    );
    this._personajeSer.getPersonaje().subscribe(
      (response) => {
        this.personajes = response;
      },
      (error) => {
        console.log('Error de carga serie');
      }
    );
  }
  registrarDatos() {
    var optiosPer = this.selectPer.nativeElement.options;
    var optiosSer = this.selectSer.nativeElement.options;

    var idSerie = '';
    var idPersonaje = '';

    for (var opserie of optiosSer) {
      if (opserie.selected == true) {
        idSerie = opserie.value;
      }
    }
    for (var opper of optiosPer) {
      if (opper.selected == true) {
        idPersonaje = opper.value;
      }
    }

    this._personajeSer.updatePersonaje(idSerie, idPersonaje).subscribe(
      (response) => {
        this._router.navigate(['/']);
      },
      (error) => {
        console.log('Error de modicacion');
      }
    );
  }
}
