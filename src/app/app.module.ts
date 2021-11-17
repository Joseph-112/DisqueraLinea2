import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdminServiceService } from './admin-service.service';
import { AppRoutingModule} from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './administrador/default/default.module';
import { LoginModule } from './login/login/login.module';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    LoginModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [AdminServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
