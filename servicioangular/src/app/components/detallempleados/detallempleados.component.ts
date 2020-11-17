import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Empleado } from './../../models/empleado';
import { EmpleadoRoutingService } from './../../services/empleadorouting.service';

@Component({
  selector: 'app-detallempleados',
  templateUrl: './detallempleados.component.html',
  styleUrls: ['./detallempleados.component.css'],
  providers: [EmpleadoRoutingService],
})
export class DetallempleadosComponent implements OnInit {
  public emp: Empleado;
  public empno: number;

  constructor(
    private _activateRoute: ActivatedRoute,
    private _service: EmpleadoRoutingService
  ) {}
  ngOnInit(): void {
    this._activateRoute.params.subscribe((params: Params) => {
      this.buscarEmpleado(params.empno);
    });
  }

  buscarEmpleado(empno) {
    this._service.buscarEmpleado(empno).subscribe(
      (response) => {
        this.emp = response;
      },
      (error) => {
        console.log('Error al buscar empleado con id ' + empno);
      }
    );
  }
}
