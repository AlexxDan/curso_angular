import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-formulariopersona',
  templateUrl: './formulariopersona.component.html',
  styleUrls: ['./formulariopersona.component.css']
})
export class FormulariopersonaComponent implements OnInit {

  //Declararamos yb objeto como modelo que deseamos enlazar en el formulario
  public user:any;
  public mensaje:string;

  constructor() {
    this.user={
      nombre:"",
      apellidos:"",
      edad:0,
    };
this.mensaje="";
   }

  ngOnInit(): void {
  }
  
  recibirDatos(){
    this.mensaje="Datos recibido";
    console.log(this.user);
  }

}
