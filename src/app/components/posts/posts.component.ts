import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/usuario';
import { NgserviceService } from 'src/app/ngservice.service';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private _service:NgserviceService,private _route:Router) { }
  filterPost = '';
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

  goToViewUsuario(id_Usuario: number){
    console.log("id"+id_Usuario);
    this._route.navigate(['viewusuario',id_Usuario]);
  }

  goToAddUsuario(){
    this._route.navigate(['addusuario']);
  }



}
