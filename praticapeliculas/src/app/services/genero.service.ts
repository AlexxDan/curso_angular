import {Injectable} from "@angular/core"
import {HttpClient} from "@angular/common/http"
import {Observable} from "rxjs"
import { Global} from "./global"

@Injectable()
export class GeneroService{

    public url:string;

    constructor(private _http:HttpClient){
        this.url=Global.urlpeliculas;
    }

    getGeneros():Observable<any>{
        var request="api/Generos";
        return this._http.get(this.url+request);
    }
}