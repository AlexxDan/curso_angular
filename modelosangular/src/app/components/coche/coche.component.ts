import { Component, OnInit,Input } from '@angular/core';
import { Coche } from './../../models/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css'],
})
export class CocheComponent implements OnInit {
  @Input() car: Coche;
  //public car: Coche;
  public mensaje: string;
  constructor() {
    //this.car = new Coche('Seat', 'Renol', 0, 380, 10, false);
    
  }

  //Cuando recibimos objetos no se utiliza el constructor
  ngOnInit(): void {
    this.comprobarEstado();
  }

  comprobarEstado() {
    if (this.car.estado == false) {
      this.mensaje = 'El coche esta apagado';
      this.car.veloc = 0;
      return false;
    } else {
      this.mensaje = 'El coche esta encendido';
      return true;
    }
  }

  cambiarEstadoCoche() {
    this.car.estado = !this.car.estado;
    this.comprobarEstado();
  }

  accelerarCoche() {
    if (this.comprobarEstado() == false) {
      alert('El coche no esta encendido');
    } else {
      this.car.veloc = this.car.veloc + this.car.acceleracion;

      if (this.car.veloc >= this.car.velocM) {
        this.car.veloc = this.car.velocM;
      }
    }
  }

 
}
