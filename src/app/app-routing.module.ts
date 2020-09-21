import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuariolistComponent } from './usuariolist/usuariolist.component';
import { AddusuarioComponent } from './addusuario/addusuario.component';
import {EditusuarioComponent} from './editusuario/editusuario.component';
import {ViewusuarioComponent} from './viewusuario/viewusuario.component';

const routes: Routes = [
  {path:'' ,component:UsuariolistComponent},
  {path:'addusuario', component: AddusuarioComponent},
  {path:'editusuario', component: EditusuarioComponent},
  {path:'viewusuario', component: ViewusuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
