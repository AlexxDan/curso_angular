import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Departamento } from './../../models/departamento';
import { DepartamentoService } from './../../services/departamento.service';

@Component({
  selector: 'app-modifcardept',
  templateUrl: './modifcardept.component.html',
  styleUrls: ['./modifcardept.component.css'],
})
export class ModifcardeptComponent implements OnInit {
  public departamento: Departamento;

  @ViewChild('cajNum') cajaNumero: ElementRef;
  @ViewChild('cajNombre') cajaNombre: ElementRef;
  @ViewChild('cajLoc') cajaLocalidad: ElementRef;

  constructor(
    private _activateRouter: ActivatedRoute,
    private _service: DepartamentoService,
    private _router: Router
  ) {
    this.cajaNumero = ElementRef.prototype;
    this.cajaNombre = ElementRef.prototype;
    this.cajaLocalidad = ElementRef.prototype;
  }

  ngOnInit(): void {
    this._activateRouter.params.subscribe((params: Params) => {
      this.buscarPorDepartamento(params.idDept);
    });
  }

  updateDept() {
    var num = parseInt(this.cajaNumero.nativeElement.value);
    var nom = this.cajaNombre.nativeElement.value;
    var loc = this.cajaLocalidad.nativeElement.value;

    var dept = new Departamento(num, nom, loc);

    this._service.updateDepartamento(dept).subscribe(
      (response) => {
        this._router.navigate(['/']);
      },
      (error) => {
        console.log('Error al modificar departamento');
      }
    );
  }

  buscarPorDepartamento(id) {
    this._service.buscarIdDept(id).subscribe(
      (response) => {
        this.departamento = response;
      },
      (error) => {
        console.log('Error de carga dept ');
      }
    );
  }
}
