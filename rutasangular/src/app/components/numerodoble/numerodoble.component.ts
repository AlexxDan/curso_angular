import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-numerodoble',
  templateUrl: './numerodoble.component.html',
  styleUrls: ['./numerodoble.component.css'],
})
export class NumerodobleComponent implements OnInit {

  public doble: number;
  public numero:number;

  //debemos inyectar los dos objetosa para poder recuperar rutaas Activateroute y ROuter
  constructor(private _activeRouter: ActivatedRoute, private _router: Router) {}
  
  //creamos un metodo para la redireccion en este ejemplo , a nosostros mismos
  redirect(num){
    this._router.navigate( ["/numerodoble", num] );
  }

  ngOnInit(): void {
    //Debemos suscribirnos al parametro para poder
    //recibirlo
    //dentro de params vendran los parametros por su name
    this._activeRouter.params.subscribe((params: Params) => {
      console.log(params);
      //
      if(params.numero!=null){
        this.numero=parseInt(params.numero);
        this.doble=this.numero*2;
      }else{
        console.log("No hay parametros");
      }
    });
  }
}
