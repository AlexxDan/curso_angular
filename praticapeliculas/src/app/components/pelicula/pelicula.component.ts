import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes, Params } from '@angular/router';
import { Peliculas } from './../../models/peliculas';
import { PeliculaService } from './../../services/pelicula.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css'],
  providers: [PeliculaService],
})
export class PeliculaComponent implements OnInit {
  public pelicula: Peliculas;

  constructor(
    private _activareRoute: ActivatedRoute,
    private _service: PeliculaService
  ) {}

  ngOnInit(): void {
    this._activareRoute.params.subscribe((params: Params) => {
      this.buscarPeli(params.idpeli);
    });
  }

  buscarPeli(idPeli) {
    this._service.getPeliculaId(idPeli).subscribe(
      (response) => {
        this.pelicula = response;
      },
      (error) => {
        console.log('Error al cargar pelicula con id ' + idPeli);
      }
    );
  }
}
