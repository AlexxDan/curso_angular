import {HttpClient,HttpHeaders, HttpRequest} from "@angular/common/http"
import {Observable} from "rxjs"
import {Injectable} from "@angular/core"
import {Global} from "./global"

@Injectable()
export class PlantillaService{
    private url:string;
    constructor(private _htpp:HttpClient) {
        this.url=Global.urlplantilla;
    }

    cargarPlantilla():Observable<any>{
        var request="/api/Plantilla";
        return this._htpp.get(this.url+request);
    }

    cargarPlantillaId(id:string):Observable<any>{
        var request="/api/Plantilla/"+id;
        return this._htpp.get(this.url+request);
    }

    cargarAllFunciones():Observable<any>{
        var request="/api/Plantilla/Funciones";
        return this._htpp.get(this.url+request);
    }

    cargarPlantillaFuncion(fun:string):Observable<any>{
        var request="/api/Plantilla/PlantillaFuncion/"+fun;
        return this._htpp.get(this.url+request);
    }

    actualizarSalarioFun(funcion:string,aumento:number):Observable<any>{
        var request="/api/Plantilla/"+funcion+"/"+aumento;
        var json=JSON.stringify("");
        var cabecera= new HttpHeaders().set('Content-Type', 'application/json');
        return this._htpp.put(this.url+request,json,{
            headers:cabecera
        });
    }

}