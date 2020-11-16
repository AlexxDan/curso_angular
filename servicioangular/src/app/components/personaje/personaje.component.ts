import { Component, OnInit } from '@angular/core';
import {PersonajeServices} from "./../../services/personaje.service"
import { Personaje} from "./../../models/personaje";

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css'],
  providers: [PersonajeServices]
})
export class PersonajeComponent implements OnInit {

  public personajes:Array<Personaje>;

  constructor(private _personajeService: PersonajeServices) { }

  ngOnInit(): void {
    this._personajeService.getMensaje();
    this.personajes=this._personajeService.getPersonaje();
  }
}
