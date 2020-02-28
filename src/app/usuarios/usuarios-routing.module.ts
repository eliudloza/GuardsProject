import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuariosComponent} from '../componentes/usuarios/usuarios.component';
import {UsuariosListadoComponent} from './usuarios-listado/usuarios-listado.component';
import {UsuarioDetalleComponent} from './usuario-detalle/usuario-detalle.component';
import {CanActivateGuard} from '../guards/can-activate.guard';



const routes: Routes = [
  {path: 'usuarios', component: UsuariosComponent,
  children: [
      {path: '', component: UsuariosListadoComponent},
      {path: ':id', component: UsuarioDetalleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
