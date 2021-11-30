import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './administrador/default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { CancionOpComponent } from './modules/posts/cancion-op/cancion-op.component';
import { FormAlbumEliminarComponent } from './shared/widgets/form-album-eliminar/form-album-eliminar.component';
import { AlbumOpComponent } from './modules/posts/album-op/album-op.component';
import { LoginComponent } from './login/login/login.component';
import { CatalogoComponent } from './shared/widgets/catalogo/catalogo.component';
import { GuardianService } from './_service/guardian.service';
import { CarritoComponent } from './shared/widgets/catalogo/carrito/carrito.component';


const routes: Routes = [{
  path: 'log',
    component: LoginComponent
  },{
  path: '',
  component: DefaultComponent ,  canActivate:[ GuardianService],
  children: [{
    path: '',
    component: DashboardComponent ,  canActivate:[ GuardianService]
  }, {
    path: 'posts',
    component: PostsComponent, canActivate:[ GuardianService]
  }, {
    path: 'cancionOp',
    component: CancionOpComponent, canActivate:[ GuardianService]
  }, {
    path: 'albumOp',
    component: AlbumOpComponent, canActivate:[ GuardianService]
  }
]}
,{path: 'catalogo', component: CatalogoComponent},
{path: 'carrito', component: CarritoComponent},
{path: '**', component: LoginComponent}



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
