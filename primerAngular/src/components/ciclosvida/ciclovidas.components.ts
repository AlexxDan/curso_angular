import { Component, OnInit , DoCheck } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida',
  templateUrl: './ciclovidas.components.html'
})
export class CicloVida {
  public mensaje:string;

  constructor() {
    console.log('Console log construcor');
    this.mensaje="Hoy es martes";
  }
  ngOnInit(): void {
    console.log('Ejecutado del metodo onInit');
  }
  ngDoCheck(){
    console.log("Estoy en docheck");
  }


  //Creamos un metodo de accion para llamarlo con un boton
  cambiarMensaje(){
    this.mensaje="Y mañana es miercoles.....";
  }

}
