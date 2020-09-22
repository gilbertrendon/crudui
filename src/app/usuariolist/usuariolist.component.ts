import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';
import {Usuario} from '../usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-usuariolist',
  templateUrl: './usuariolist.component.html',
  styleUrls: ['./usuariolist.component.css']
})
export class UsuariolistComponent implements OnInit {
  constructor(private _service:NgserviceService, private _route:Router) { }

  _usuarioList : Usuario[];
  ngOnInit(): void {
                      this._service.fetchUsuarioListFromRemote().subscribe(
                        data=>{
                                console.log("Response received");
                                this._usuarioList=data;
                        },
                        error=>console.log("Exception ocurred")
                      )
                    }

  goToAddUsuario(){
    this._route.navigate(['addusuario']);
  }

  goToEditUsuario (id_Usuario : number){
    console.log("id"+id_Usuario);
    this._route.navigate(['/editusuario',id_Usuario]);
  }

  goToViewUsuario(id_Usuario: number){
    console.log("id"+id_Usuario);
    this._route.navigate(['viewusuario',id_Usuario]);
  }

  // onInitt(){
  //   let cuerpo = document.getElementById("cuerpo");
  //   while(cuerpo. > 0){
  //     //cuerpo.;
  //   }
  //   //this._usuarioList.forEach(Usuario);
  // }

}
