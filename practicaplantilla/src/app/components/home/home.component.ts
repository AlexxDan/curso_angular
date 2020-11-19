import { Component, OnInit } from '@angular/core';
import { Plantilla } from './../../models/plantilla';
import { PlantillaService } from './../../services/plantilla.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public allplantillas: Array<Plantilla>;
  constructor(private _service: PlantillaService) {
    this.allplantillas = [];
  }

  ngOnInit(): void {
    this.cargarPlantillas();
  }

  cargarPlantillas() {
    this._service.cargarPlantilla().subscribe(
      (response) => {
        this.allplantillas = response;
      },
      (error) => {
        console.log('Error al cargar las plantillas');
      }
    );
  }
}
