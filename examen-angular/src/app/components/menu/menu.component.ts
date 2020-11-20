import { Component, OnInit } from '@angular/core';
import{Serie} from "./../../models/serie"
import{SerieService} from "./../../services/serie.service"
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public series :Array<Serie>;

  constructor(private _service:SerieService) {
    this.series=[];
   }

  ngOnInit(): void {
    this.cargarSeries();
  }
  cargarSeries(){
    this._service.getSeries().subscribe(response=>{
      this.series=response;
    }, error=>{
      console.log("Error al cargar serie")
    })
  }
}
