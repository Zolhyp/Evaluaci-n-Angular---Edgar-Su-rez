import { Injectable } from '@angular/core';
import { Tabla } from '../models/tabla';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Global } from './global';

@Injectable()
export class TablaService{
    public filas:Tabla[];
    public url: string;

    constructor(
        private _http: HttpClient
    ){
        this.url = Global.url;
        this.filas=[
            
        ];
    }

    readData(id:string):Observable<any>{
        return this._http.get(this.url+'readData/?id='+id);
    }

    readAllData():Observable<any>{
        return this._http.get(this.url+'readAllData');
    }

    deleteData(id:string):Observable<any>{
        return this._http.delete(this.url+'deleteData/?id='+id);
    }

    deleteAllData():Observable<any>{
        return this._http.delete(this.url+'deleteAllData');
    }

    updateData(Tabla):Observable<any>{
        let params = JSON.stringify(Tabla);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'updateData',params,{headers:headers})
    }

    createData(Tabla):Observable<any>{
        let params = JSON.stringify(Tabla);
        let headers = new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'createData',params,{headers:headers})
    }
}