import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { JwtModule } from "@auth0/angular-jwt";
 

import { AppComponent } from './app.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { AdminServiceService } from './admin-service.service';
import { AppRoutingModule} from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './administrador/default/default.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { LoginModule } from './login/login/login.module';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from 'src/app/_service/usuario.service';
import { environment } from 'src/environments/environment';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Login } from './_model/Login';


export  function jwtOptionsFactory(usuarioService:UsuarioService) {
  return {
    tokenGetter: async () => {
      let respuesta = usuarioService.estaLogeado();
      let intentos = 0;
      if(respuesta == 1 || respuesta == 2){
        if(respuesta == 2){
          //expiro el token
          refresLogin(usuarioService);
        while(true){
          await delay(1500);
          respuesta = usuarioService.estaLogeado();
          if(respuesta==1){
            break;
          }
          intentos++;
          if(intentos == 3){
            //se intenta 3 veces sin resultados
            //borramos datos guardadados
            
            usuarioService.cerrarSession();
            return null;
          }
        }
  
      }

        let tk = sessionStorage.getItem(environment.TOKEN);
        return tk != null ? tk : '';

      } else {
        return null;
      }
    },
    allowedDomains : ["localhost:8080"],
    disallowedRoutes: ["http://localhost:8080/Disco/api/auth/token"]
  }
}

export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export function refresLogin(usuarioService:UsuarioService){
  let token = sessionStorage.getItem(environment.TOKEN);
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token?.toString());
  //let auxcorre = CryptoJS.AES.decrypt(environment.CORREO.trim(), decodedToken.nameid.trim()).toString();
  let login = new Login();
  login.email = atob(sessionStorage.getItem("email")!);
  login.password =  atob(sessionStorage.getItem("password")!);
  usuarioService.loginToken(login).subscribe(data =>{
    sessionStorage.setItem(environment.TOKEN, data.token);
  });
}

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent
  ],
  imports: [
  
  BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    LoginModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MatSnackBarModule,
    FormsModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [UsuarioService]
      }
    })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    UsuarioService,AdminServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
