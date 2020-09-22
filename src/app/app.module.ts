import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariolistComponent } from './usuariolist/usuariolist.component';
import { EditusuarioComponent } from './editusuario/editusuario.component';
import { ViewusuarioComponent } from './viewusuario/viewusuario.component';
import { HttpClientModule } from '@angular/common/http';
import { AddusuarioComponent } from './addusuario/addusuario.component';
import { FormsModule} from '@angular/forms';
import { PostsComponent } from './components/posts/posts.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AddusuarioComponent,
    UsuariolistComponent,
    EditusuarioComponent,
    ViewusuarioComponent,
    PostsComponent,
    FilterPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
