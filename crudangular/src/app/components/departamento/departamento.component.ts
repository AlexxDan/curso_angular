import { Component, OnInit } from '@angular/core';
import { Departamento } from './../../models/departamento';
import { DepartamentoService } from './../../services/departamento.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css'],
})
export class DepartamentoComponent implements OnInit {
  public departamentos: Array<Departamento>;

  constructor(
    private _service: DepartamentoService,
    private _activatedRouter: ActivatedRoute
  ) {
    this.departamentos = [];
  }

  ngOnInit(): void {
    //Recibimos un parametro
    this._activatedRouter.params.subscribe((params: Params) => {
      if (params.idDept != null) {
        //Debemos eliminar
        this.eliminarDepartamento(params.idDept);
      }else{
        this.cargarDepartamento();
      }
    });

  }

  cargarDepartamento() {
    this._service.getDepartamentos().subscribe(
      (response) => {
        this.departamentos = response;
      },
      (error) => {
        console.log('Error al cargar departamento');
      }
    );
  }
  eliminarDepartamento(id) {
    this._service.deleteDepartamentoServicio(id).subscribe(
      (respose) => {
        this.cargarDepartamento();
      },
      (error) => {
        console.log('Error al eliminar dept');
      }
    );
  }
}
