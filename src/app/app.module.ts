import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './componentes/menu/menu.component';
import { UsuariosModule } from './usuarios/usuarios.module';
import { BotonpanicoComponent } from './componentes/botonpanico/botonpanico.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { LoginComponent } from './componentes/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    BotonpanicoComponent,
    ContactoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    UsuariosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
