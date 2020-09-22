import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Usuario} from '../usuario';
import {ActivatedRoute, Router} from '@angular/router';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-editusuario',
  templateUrl: './editusuario.component.html',
  styleUrls: ['./editusuario.component.css']
})
export class EditusuarioComponent implements OnInit {
usuario = new Usuario();
  constructor(private _route:Router,private _service: NgserviceService, private _activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    let id = parseInt(this._activateRoute.snapshot.paramMap.get('id'));
    this._service.fetchUsuarioByidFromRemote(id).subscribe(
      data =>{
        console.log("eception ocurred");
        this.usuario=data;
      },
    )
  }
  updateuserformsubmit()
  {
    this._service.addUserToRemote(this.usuario).subscribe
    (
      data=>
            {
              console.log("data added succesfull");
              this._route.navigate(['']);
            },
            error=>console.log("error")
    )
  }

  goTolist(){
    console.log('De regreso');
    this._route.navigate(['']);
  }


}
