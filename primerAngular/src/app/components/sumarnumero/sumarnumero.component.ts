import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sumarnumero',
  templateUrl: './sumarnumero.component.html',
  styleUrls: ['./sumarnumero.component.css']
})
export class SumarnumeroComponent implements OnInit {
  public sumar: number;
  @ViewChild("cajaNumero1") cajaNumero1:ElementRef;
  @ViewChild("cajaNumero2") cajaNumero2:ElementRef;

  sumarNumero(){
    var num1=parseInt(this.cajaNumero1.nativeElement.value);
    var num2=parseInt(this.cajaNumero2.nativeElement.value);
    this.sumar=num1+num2;
  }

  constructor() { 
    this.sumar=0;
  }

  ngOnInit(): void {
  }

}
