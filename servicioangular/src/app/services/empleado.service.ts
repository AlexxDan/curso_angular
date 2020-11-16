import { Global } from './global';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EmpleadoService {
  public url: string;
  //todas las variable inyectadas deben ser _ para mejor comprensión
  constructor(private _httpCliente: HttpClient) {
    this.url = Global.urlempleado;
  }

  filtrarSalario(salario: string): Observable<any> {
    var request = 'api/Empleados/EmpleadosSalario/' + salario;
    return this._httpCliente.get(this.url + request);
  }

  filtrarOficio(oficio: string): Observable<any> {
    var request = 'api/Empleados/EmpleadosOficio/' + oficio;
    return this._httpCliente.get(this.url + request);
  }

  getOficio(): Observable<any> {
    var request = '/api/Empleados/oficios';
    return this._httpCliente.get(this.url + request);
  }
}
