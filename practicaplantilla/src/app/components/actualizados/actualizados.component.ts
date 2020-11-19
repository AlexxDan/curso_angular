import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { PlantillaService } from './../../services/plantilla.service';
import { Plantilla } from './../../models/plantilla';

@Component({
  selector: 'app-actualizados',
  templateUrl: './actualizados.component.html',
  styleUrls: ['./actualizados.component.css'],
})
export class ActualizadosComponent implements OnInit {
  public plantillaFuncion: Array<Plantilla>;
  constructor(
    private _servicio: PlantillaService,
    private _activatedRouter: ActivatedRoute,
    private _router: Router
  ) {
    this.plantillaFuncion = [];
  }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe((params: Params) => {
      this.cargarPlantilla(params.funcion);
    });
  }

  cargarPlantilla(funcion) {
    this._servicio.cargarPlantillaFuncion(funcion).subscribe(
      (response) => {
        this.plantillaFuncion = response;
      },
      (error) => {
        console.log('Error al cargar las plantilla por funcion');
      }
    );
  }
  gotoHome() {
    this._router.navigate(['/']);
  }
}
