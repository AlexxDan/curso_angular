import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Comic } from './../../models/comics';
@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {

  @Input() comic:Comic;
  @Input() indice:number;
  @Output() comicFavorito=new EventEmitter();
  @Output() eliminarComic=new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  favorito(){
    console.log("Hijo");
    console.log(this.indice);
    this.comicFavorito.emit(this.indice);
  }

  deleteComic(){
this.eliminarComic.emit(this.indice);
  }
}
