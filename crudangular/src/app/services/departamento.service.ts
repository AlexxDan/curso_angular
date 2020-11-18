import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import { Departamento } from '../models/departamento';

@Injectable()
export class DepartamentoService {
  private url: string;
  constructor(private _http: HttpClient) {
    this.url = Global.urldept;
  }

  //put  /api/Departamentos
  //get/{id} /api/Departamentos/{id}
  //delte /api/Departamentos/{id}

  getDepartamentos(): Observable<any> {
    var request = '/api/Departamentos';
    return this._http.get(this.url + request);
  }

  deleteDepartamentoServicio(idDept: string): Observable<any> {
    var request = '/api/Departamentos/' + idDept;
    return this._http.delete(this.url + request);
  }

  insertDepartamentoServicio(departamento: Departamento): Observable<any> {
    var request = '/api/Departamentos';
    var json = JSON.stringify(departamento);
    //Para enviar información al servicio se realiza mediante cabecera
    var cabecera = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + request, json, {
      headers: cabecera,
    });
  }

  updateDepartamento(departamento :Departamento): Observable<any>{
    var request="/api/Departamentos";
    var json=JSON.stringify(departamento);
    var cabecera= new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.put(this.url+request,json,
      {
        headers:cabecera
      });
  }

  buscarIdDept(id:string):Observable<any>{
    var request="/api/Departamentos/"+id;
    return this._http.get(this.url+request);
  }
}
