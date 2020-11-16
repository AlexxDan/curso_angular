import { Component, OnInit } from '@angular/core';

//Importamos el cocheservicio y el modelo de cohce para poder usarlo
import { CocheService } from './../../services/coche.service';
import { Coche } from './../../models/coche';

@Component({
  selector: 'app-coche',
  templateUrl: './coche.component.html',
  styleUrls: ['./coche.component.css'],
  //creammos un providers de tipo donde estará el servicio
  providers: [CocheService],
})
export class CocheComponent implements OnInit {
  //Creamos un array de tipo coche
  public coches: Array<Coche>;
  //instaciamos un variable cocheservicio
  constructor(private _cocheService: CocheService) {}

  ngOnInit(): void {
    //En el oninit llamamos al metodo que devuelve el observable y hacemos una 
    //promesa a subscribe. Para poder capturar hacemos una los que nos devuelve el 
    //metodo observable
    this._cocheService.getCoche().subscribe(
      (response) => {
        this.coches = response;
        console.log(response);
      },
      (error) => {
        console.log('Error de peticion');
      }
    );
  }
}
