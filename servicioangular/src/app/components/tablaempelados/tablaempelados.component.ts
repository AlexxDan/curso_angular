import { Component, OnInit } from '@angular/core';
import {Empleado} from "./../../models/empleado";
import {EmpleadoRoutingService} from "./../../services/empleadorouting.service"

@Component({
  selector: 'app-tablaempelados',
  templateUrl: './tablaempelados.component.html',
  styleUrls: ['./tablaempelados.component.css'], 
  providers:[EmpleadoRoutingService]
})
export class TablaempeladosComponent implements OnInit {

  public empelados : Array<Empleado>;

  constructor(private _service:EmpleadoRoutingService) {
    this.empelados=[];
   }

  ngOnInit(): void {
    this._service.getEmpleados().subscribe(response=>{
      this.empelados=response
    }, error=>{
      console.log("Carga de empeleados incorrecta")
    })
  }

}
