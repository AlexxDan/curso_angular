import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PlantillaService } from './../../services/plantilla.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modicar-plantilla',
  templateUrl: './modicar-plantilla.component.html',
  styleUrls: ['./modicar-plantilla.component.css'],
})
export class ModicarPlantillaComponent implements OnInit {
  @ViewChild('funcion') selectFUncions: ElementRef;
  @ViewChild('aumSalario') aumSalario: ElementRef;
  public funciones: Array<string>;

  constructor(private _servicio: PlantillaService, private _router: Router) {
    this.selectFUncions = ElementRef.prototype;
    this.aumSalario = ElementRef.prototype;
    this.funciones = [];
  }

  ngOnInit(): void {
    this.cargarFunciones();
  }

  cargarFunciones() {
    this._servicio.cargarAllFunciones().subscribe(
      (response) => {
        this.funciones = response;
      },
      (error) => {
        console.log('Error al cargar todas las funciones');
      }
    );
  }

  actualizarSalario() {
    var funcionesSelec = this.selectFUncions.nativeElement.options;
    var funcion=""
    var aumsalario = parseInt(this.aumSalario.nativeElement.value);

    for (var fun of funcionesSelec) {
      if (fun.selected == true) {
        funcion=fun.value;
      }
    }

    this._servicio.actualizarSalarioFun(funcion, aumsalario).subscribe(
      (response) => {
        this._router.navigate(['/actualizado/',funcion]);
      },
      (error) => {
        console.log(
          'Error al actualizar el  aumento de  salario ' +
            aumsalario +
            ' para los funcionario de  ' +
            funcion
        );
      }
    );
  }
}
