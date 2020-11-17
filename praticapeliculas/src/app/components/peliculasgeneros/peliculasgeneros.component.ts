import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Params } from '@angular/router';
import { Peliculas } from './../../models/peliculas';
import { PeliculaService } from './../../services/pelicula.service';

@Component({
  selector: 'app-peliculasgeneros',
  templateUrl: './peliculasgeneros.component.html',
  styleUrls: ['./peliculasgeneros.component.css'],
  providers: [PeliculaService],
})
export class PeliculasgenerosComponent implements OnInit {
  public peliculas: Array<Peliculas>;
  public peliculasFiltradas: Array<Peliculas>;

  constructor(
    private _activated: ActivatedRoute,
    private _service: PeliculaService
  ) {
    this.peliculas = [];
    this.peliculasFiltradas = [];
  }

  ngOnInit(): void {
    this._activated.params.subscribe((params: Params) => {
      if (params.idgenero != null || params.idgenero != undefined) {
        this.buscarPelicularGeneros(params.idgenero);
      } else if (
        params.palabrabuscar != null ||
        params.palabrabuscar != undefined
      ) {
        this.buscarPeliculasTitulo(params.palabrabuscar);
      }
    });
  }

  buscarPelicularGeneros(idgenero) {
    this._service.getPeliculasGeneros(idgenero).subscribe(
      (response) => {
        this.peliculas = response;
      },
      (error) => {
        console.log('Error al buscar peliculas con genero de id  ' + idgenero);
      }
    );
  }

  buscarPeliculasTitulo(titulobuscar) {
    console.log(titulobuscar);
    this._service.getPeliculaTitulo(titulobuscar).subscribe(
      (response) => {
        this.peliculasFiltradas = response;
      },
      (error) => {
        console.log('Error al cargar la peli filtradas por ' + titulobuscar);
      }
    );
  }
}
