import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Params } from '@angular/router';
import { Personaje } from './../../models/personaje';
import { SerieService } from './../../services/serie.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
})
export class PersonajesComponent implements OnInit {
  public personajes: Array<Personaje>;

  constructor(
    private _activatedRouter: ActivatedRoute,
    private _service: SerieService
  ) {
    this.personajes = [];
  }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe((params: Params) => {
      this.cargarPersonajes(params.idserie);
    });
  }

  cargarPersonajes(id) {
    this._service.getPersonajesSeries(id).subscribe(
      (response) => {
        this.personajes = response;
      },
      (error) => {
        console.log('Error al cargar personajes');
      }
    );
  }
}
