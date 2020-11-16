import { Injectable } from '@angular/core';
import { Persona } from './../models/persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class PersonaService {
  public url: string;
  constructor(private _httpClient: HttpClient) {
    this.url = Global.urlperosnas;
  }

  mostrarMensjae() {
    console.log('Sevicio HTTP');
  }

  getPersona(): Observable<any> {
    var request = 'api/personas';
    return this._httpClient.get(this.url + request);
  }
}
