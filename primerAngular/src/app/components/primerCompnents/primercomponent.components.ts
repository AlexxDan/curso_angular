import { Component } from '@angular/core';
//Declaración de components y su estructura de archivos
//ademas de su nombre
@Component({
  //Nombre del component para la app
  selector: 'app-primercomponente',
  //plantilla para el componente
  templateUrl: "./primercomponent.components.html",
})
//Este nombre es para la declaracion en module
export class PrimerComponente {
    //declaramos varables para la clase
    public nombre:string;
    public anyo:number;


  //La primera evez que entra en el componente tenemos un constructor
  constructor() {
    console.log('Creando el primer componenete');
    //con this accedemos a las propiedades
    this.nombre="YP";
    this.anyo=2060;
}
  
}
