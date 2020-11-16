import { Component, OnInit } from '@angular/core';
import { PersonaService } from './../../services/persona.service';
import { Persona } from './../../models/persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css'],
  providers: [PersonaService],
})
export class PersonaComponent implements OnInit {

  public personas:Array<Persona>;
  constructor(private _personaService: PersonaService) {}

  ngOnInit(): void {
    // this._personaService.mostrarMensjae();

    this._personaService.getPersona().subscribe(
      (response) => {
        console.log(response);
        this.personas=response;
      },
      (error) => {
        console.log('Error en la peticion');
      }
    );
  }
}
