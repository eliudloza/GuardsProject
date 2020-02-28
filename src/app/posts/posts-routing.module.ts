import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostsComponent} from '../componentes/posts/posts.component';
import {CanActivateGuard} from '../guards/can-activate.guard';
import {PostsResolverGuard} from '../guards/posts-resolver.guard';


const routes: Routes = [
  {
    path: '',
    canActivateChild: [CanActivateGuard],
    children: [
      {
        path: '',
        component: PostsComponent,
        resolve: {posts: PostsResolverGuard}
      },
      {
        path: 'usuario/:id',
        component: PostsComponent,
        resolve: {posts: PostsResolverGuard}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
