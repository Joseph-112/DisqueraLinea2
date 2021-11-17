import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './administrador/default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { CancionOpComponent } from './modules/posts/cancion-op/cancion-op.component';
import { FormAlbumEliminarComponent } from './shared/widgets/form-album-eliminar/form-album-eliminar.component';
import { AlbumOpComponent } from './modules/posts/album-op/album-op.component';


const routes: Routes = [{
  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {


    path: 'posts',
    component: PostsComponent
  },{
    path:'cancionOp',
    component: CancionOpComponent
  },{
    path: 'albumOp',
    component: AlbumOpComponent
  }

]

}




];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 