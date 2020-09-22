import { Component, OnInit } from '@angular/core';
import {Usuario} from '../usuario';
import {ActivatedRoute, Router} from '@angular/router';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-viewusuario',
  templateUrl: './viewusuario.component.html',
  styleUrls: ['./viewusuario.component.css']
})
export class ViewusuarioComponent implements OnInit {
  usuario = new Usuario();
  constructor(private _route:Router,private _service: NgserviceService, private _activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this._activateRoute.snapshot.paramMap.get('id'));
    this._service.fetchUsuarioByidFromRemote(id).subscribe(
      data =>{
        this.usuario=data;
      },
    )
  }
 

  goTolist(){
    console.log('De regreso');
    this._route.navigate(['']);
  }

  goToEditUsuario (id_Usuario : number){
    console.log("id"+id_Usuario);
    this._route.navigate(['/editusuario',id_Usuario]);
  }
  
  deleteUsuario(id_Usuario : number){
   this._service.deleteUsuarioByidFromRemote(id_Usuario).subscribe(
     data =>{
       console.debug("deleted succesfully");
     },
     error => console.log("Exception ocurred")
     
   )
   this._route.navigate([''])
  }

}
