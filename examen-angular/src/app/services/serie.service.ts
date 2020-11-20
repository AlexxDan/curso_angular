import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';
import {Serie} from "./../models/serie"

@Injectable()
export class SerieService{

    public url:string;
    constructor(private _http:HttpClient){
this.url=Global.url;
    }
    
    getSeries():Observable<any>{
        var request="/api/Series"
        return this._http.get(this.url+request);
    }

    getPersonajesSeries(id:string):Observable<any>{
        var request="/api/Series/PersonajesSerie/"+id
        return this._http.get(this.url+request);
    }

}
