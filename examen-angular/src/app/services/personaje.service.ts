import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Personaje } from '../models/personaje';

@Injectable()
export class PersonajeService {
  public url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.url;
  }

  insertarPersonaje(personajeNew: Personaje): Observable<any> {
    var request = '/api/Personajes';
    var json = JSON.stringify(personajeNew);
    var cabecera = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + request, json, {
      headers: cabecera,
    });
  }

  getPersonaje(): Observable<any> {
    var reqquest = '/api/Personajes';
    return this._http.get(this.url + reqquest);
  }

  updatePersonaje(idSerie: string, idPersonaje: string): Observable<any> {
    var request = '/api/Personajes/' + idPersonaje + '/' + idSerie;
    var json = JSON.stringify('');
    var cabecera = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url + request, json, {
      headers: cabecera,
    });
  }
}
