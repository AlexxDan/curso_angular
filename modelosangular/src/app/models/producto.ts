export class Producto {
  /* public nombre:string;
    public imagen:string;
    public precio:number;

    constructor(nom,img,precio){
        console.log("Construyen objeto new Entra aqui");
        this.nombre=nom;
        this.imagen=img;
        this.precio=precio;
    }*/

  //Asi se ahora tiempo en la auto asignacion y la declarion de variables
  constructor(
    public nombre: string,
    public imagen: string,
    public precio: number
  ) {}
}
