import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Comic } from './../../models/comics';

@Component({
  selector: 'app-libreria',
  templateUrl: './libreria.component.html',
  styleUrls: ['./libreria.component.css'],
})
export class LibreriaComponent implements OnInit {
  @ViewChild('nombreComic') nombreC: ElementRef;
  @ViewChild('imgComic') imgC: ElementRef;
  @ViewChild('descripComic') descripC: ElementRef;
  public comics: Array<Comic>;
  public favorito: Comic;
  public idModif:number;

  comicFavoritoPadre(event) {

    var id = parseInt(event);
    this.idModif=id;
    this.favorito = this.comics[id];
  }

  eliminarComic(event) {
    var index = parseInt(event);
    this.comics.splice(index, 1);
  }

  registrarComic() {
    var nombre = this.nombreC.nativeElement.value;
    var img = this.imgC.nativeElement.value;
    var descrtip = this.descripC.nativeElement.value;

    var comic = {
      titulo: nombre,
      imagen: img,
      descripcion: descrtip,
    };
    this.comics.push(comic);
  }
  modificarComic(){
    var nombre = this.nombreC.nativeElement.value;
    var img = this.imgC.nativeElement.value;
    var descrtip = this.descripC.nativeElement.value;

    if(this.idModif>=0){
      
      this.comics[this.idModif].titulo=nombre;
      this.comics[this.idModif].imagen=img;
      this.comics[this.idModif].descripcion=descrtip;
    }
    this.idModif=0;
    this.favorito=null;
  }

  constructor() {
    this.comics = [
      new Comic(
        'Spiderman',
        'https://images-na.ssl-images-amazon.com/images/I/61AYfL5069L.jpg',
        'Hombre araña'
      ),
      new Comic(
        'Wolverine',
        'https://i.etsystatic.com/9340224/r/il/42f0e1/1667448004/il_570xN.1667448004_sqy0.jpg',
        'Lobezno'
      ),
      new Comic(
        'Guardianes de la Galaxia',
        'https://cdn.normacomics.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/g/u/guardianes_galaxia_guadianes_infinito.jpg',
        'Yo soy Groot'
      ),
    ];
  }
  registrar() {}

  ngOnInit(): void {}
}
