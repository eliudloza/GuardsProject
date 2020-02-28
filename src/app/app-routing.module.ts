import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsuariosComponent} from './componentes/usuarios/usuarios.component';
import {PostsComponent} from './componentes/posts/posts.component';
import {BotonpanicoComponent} from './componentes/botonpanico/botonpanico.component';
import {ContactoComponent} from './componentes/contacto/contacto.component';
import {CanDeactivateGuard} from './guards/can-deactivate.guard';
import {LoginComponent} from './componentes/login/login.component';
import {CanActivateGuard} from './guards/can-activate.guard';


const routes: Routes = [
  {path: 'panico', component: BotonpanicoComponent, outlet: 'popup'},
  {path: 'login', component: LoginComponent},
  {path: 'contacto', component: ContactoComponent, canDeactivate: [CanDeactivateGuard]},
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then(mod => mod.PostsModule),
    canLoad: [CanActivateGuard]
  },
  {path: '', redirectTo: 'usuarios', pathMatch: 'full'},
  {path: '**', redirectTo: '/usuarios', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
