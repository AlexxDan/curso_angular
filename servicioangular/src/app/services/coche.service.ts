//Creamos un servicio el cual importamos una serie de modulos para que
//funcione . Inhjectable para inyectar datos en la clase
//HttpClient para hacer las petieciones al api
//Observable es un tipo de array
import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import {Global} from "./global"

//Importamos el injectable antes de la clase
@Injectable()
export class CocheService{

    //Creamos una variable donde esta estara url proveniente del Global
    public url:string;
    //Inyectamos el httpClient al constructor e igualamos la url a la que 
    //tiene en el global
    constructor(private _httpCLiente:HttpClient){
        this.url=Global.urlcoche
    }

    //Hacemos un metodo el cual devolvera un observable de tipo any
    //el cual es que permitirá la conexion a la api y devolverá siempre
    //un observable
    getCoche(): Observable<any>{
        return this._httpCLiente.get(this.url);
    }
}