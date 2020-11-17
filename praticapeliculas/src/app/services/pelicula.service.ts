import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class PeliculaService {
  public url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.urlpeliculas;
  }

  getPeliculasGeneros(idGenero: string): Observable<any> {
    var request = 'api/peliculasgenero/' + idGenero;
    return this._http.get(this.url + request);
  }

  getPeliculaId(idPeli: string): Observable<any> {
    var request = 'api/Peliculas?idpeli=' + idPeli;
    return this._http.get(this.url + request);
  }

  getPeliculaTitulo(tituloBuscar: string): Observable<any> {
    var request = 'api/peliculastitulo/' + tituloBuscar;
    return this._http.get(this.url + request);
  }
}
