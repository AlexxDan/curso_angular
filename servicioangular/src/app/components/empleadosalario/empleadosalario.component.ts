import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { EmpleadoService } from './../../services/empleado.service';
import { Empleado } from './../../models/empleado';

@Component({
  selector: 'app-empleadosalario',
  templateUrl: './empleadosalario.component.html',
  styleUrls: ['./empleadosalario.component.css'],
  providers: [EmpleadoService],
})
export class EmpleadosalarioComponent implements OnInit {
  public empleados: Array<Empleado>;
  //Array Agregado nuevo
  public oficios: Array<string>;

  @ViewChild('cajsalario') cajaSlario: ElementRef;
  @ViewChild('selectOficio') selectOficio: ElementRef;
  buscarEmpleados() {
    var salario = this.cajaSlario.nativeElement.value;

    this._service.filtrarSalario(salario).subscribe(
      (response) => {
        this.empleados = response;
      },
      (error) => {
        console.log('Error de carga de datos');
      }
    );
  }

  //Metodo agragador
  buscarEmpOficio() {
    var oficios = this.selectOficio.nativeElement.options;
    var oficio = '';

    for (var ofic of oficios) {
      if (ofic.selected == true) {
        oficio = ofic.value;
      }
    }
    console.log(oficio);

    this._service.filtrarOficio(oficio).subscribe(
      (response) => {
        this.empleados = response;
      },
      (error) => {
        console.log('Error de carga de empleados por oficio');
      }
    );
  }
  constructor(private _service: EmpleadoService) {
    this.empleados = [];
    //Carga de oficios
    this._service.getOficio().subscribe(
      (response) => {
        this.oficios = response;
        console.log(response);
      },
      (error) => {
        console.log('Error de carga');
      }
    );
  }

  ngOnInit(): void {}
}
