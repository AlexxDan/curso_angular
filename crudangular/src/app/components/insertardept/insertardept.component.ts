import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Departamento } from './../../models/departamento';
import { DepartamentoService } from './../../services/departamento.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insertardept',
  templateUrl: './insertardept.component.html',
  styleUrls: ['./insertardept.component.css'],
})
export class InsertardeptComponent implements OnInit {
  @ViewChild('cajNum') cajaNumero: ElementRef;
  @ViewChild('cajNombre') cajaNombre: ElementRef;
  @ViewChild('cajLoc') cajaLocalidad: ElementRef;
private stringErir:string;
  constructor(private _router: Router, private _service: DepartamentoService) {
    this.cajaNumero = ElementRef.prototype;
    this.cajaNombre = ElementRef.prototype;
    this.cajaLocalidad = ElementRef.prototype;
  }

  ngOnInit(): void {}

  insertarDepartamento() {
    var num = parseInt(this.cajaNumero.nativeElement.value);
    var nombre = this.cajaNombre.nativeElement.value;
    var localidad = this.cajaLocalidad.nativeElement.value;

    var dept = new Departamento(num, nombre, localidad);

    this._service.insertDepartamentoServicio(dept).subscribe(
      (response) => {
        this._router.navigate(['/']);
      },
      (error) => {
        this.stringErir=error;
        console.log('Error  al insertar');
        console.log(this.stringErir);
        
      }
    );
  }
}
