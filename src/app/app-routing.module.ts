import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './administrador/default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent,
  children: [{
    path: 'Dashboard',
    component: DashboardComponent
  }, {
    path: 'posts',
    component: PostsComponent
  }]

}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 