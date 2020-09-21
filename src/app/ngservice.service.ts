import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
//import {Usuario} from './Usuario'

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  fetchUsuarioListFromRemote():Observable<any>{
   return this._http.get<any>("http://localhost:8085/getusuariolist");
  }

  //addUserToRemote( usuario : Usuario)
}
