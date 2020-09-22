import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Usuario} from '../usuario';
import {Router} from '@angular/router';
import { NgserviceService } from '../ngservice.service';

@Component({
  selector: 'app-addusuario',
  templateUrl: './addusuario.component.html',
  styleUrls: ['./addusuario.component.css']
})
export class AddusuarioComponent implements OnInit {
usuario = new Usuario();
  constructor(private _route:Router,private _service: NgserviceService) { }

  ngOnInit(): void {
  }

  adduserformsubmit()
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
