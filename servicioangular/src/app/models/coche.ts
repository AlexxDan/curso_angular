//Creamos un modelo coche el cual sus propiedades deben 
//ser iguales a las del JSON , el nombre de las propiedades
//deben coincidir 

export class Coche {
  constructor(
    public idcoche: number,
    public marca: string,
    public modelo: string,
    public conductor: string,
    public imagen: string
  ) {}
}
