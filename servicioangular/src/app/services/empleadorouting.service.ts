import { Global } from './global';
import { Empleado } from './../models/empleado';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmpleadoRoutingService {
  private url: string;

  constructor(private _http: HttpClient) {
    this.url = Global.urlempleado;
  }

  getEmpleados(): Observable<any> {
    var request = 'api/Empleados';
    return this._http.get(this.url + request);
  }

  buscarEmpleado(empno: string): Observable<any> {
    var request = 'api/Empleados/' + empno;
    return this._http.get(this.url + request);
  }
}
