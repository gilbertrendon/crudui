import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Usuario} from './usuario';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class NgserviceService {

  constructor(private _http:HttpClient) { }

  fetchUsuarioListFromRemote():Observable<any>{
   return this._http.get<any>("http://localhost:8085/getusuariolist");
  }
  

  addUserToRemote( usuario : Usuario):Observable<any>{
    //Aquí puedo consultar si el nombre del usuario a ingresar ya esta en bd
    //no lo ingresa
    //var num = new Number(usuario.id_Usuario);
    
    //let string = num.toString(usuario.id_Usuario);
   
    //let jsonObject = this._http.get<any>("http://localhost:8085/getusuariobyid/"+num);
    //let tsobject = plainToClass(Models.Foo,jsonObject); 
    //continuar luego
    return this._http.post<any>("http://localhost:8085/addusuario",usuario);
  }

  fetchUsuarioByidFromRemote(id_Usuario: number):Observable<any>{
    return this._http.get<any>("http://localhost:8085/getusuariobyid/"+id_Usuario);
   }
   deleteUsuarioByidFromRemote(id_Usuario: number):Observable<any>{
    return this._http.delete<any>("http://localhost:8085/deleteusuariobyid/"+id_Usuario);
   }



}
