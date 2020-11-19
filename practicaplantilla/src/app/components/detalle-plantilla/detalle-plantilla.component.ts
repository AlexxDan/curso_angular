import { Component, OnInit } from '@angular/core';
import {Router, Params , ActivatedRoute} from "@angular/router"
import {PlantillaService} from "./../../services/plantilla.service"
import {Plantilla} from "./../../models/plantilla"

@Component({
  selector: 'app-detalle-plantilla',
  templateUrl: './detalle-plantilla.component.html',
  styleUrls: ['./detalle-plantilla.component.css']
})
export class DetallePlantillaComponent implements OnInit {

  public plantilla: Plantilla;
  constructor(private _router:Router, private _service:PlantillaService, private _activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRouter.params.subscribe((params:Params)=>{
      this.plantillaID(params.idplantilla);
    })
  }
  plantillaID(id){
this._service.cargarPlantillaId(id).subscribe(
  response=>{
this.plantilla=response
  }, error=>{
console.log("Error al cargar plantilla con id "+ id)
  }
)
  }

  gotoHome(){
    this._router.navigate(['/']);
  }

}
