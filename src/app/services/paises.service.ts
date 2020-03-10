import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private url:string = "https://restcountries.eu/rest/v2/lang/es";

  paises:any = [];

  constructor(private _http: HttpClient) { }

  getPaises(){
    return this._http.get(this.url);
  }
}
