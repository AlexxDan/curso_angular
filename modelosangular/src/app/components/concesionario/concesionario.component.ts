import { Component, OnInit } from '@angular/core';
import { Coche } from "./../../models/coche";

@Component({
  selector: 'app-concesionario',
  templateUrl: './concesionario.component.html',
  styleUrls: ['./concesionario.component.css']
})
export class ConcesionarioComponent implements OnInit {

  public coches:Array<Coche>;

  constructor() { 
this.coches=[
  new Coche("For","Focus",0,280,15,false),
  new Coche("Seat","Ibiza",0,260,11,false),
  new Coche("Chevrolet" ,"Camaro ",0,300,20,false),
]

  }

  ngOnInit(): void {
  }

}
