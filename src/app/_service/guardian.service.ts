import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { Login } from '../_model/Login';
import { Rol } from '../_model/Rol';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class GuardianService implements CanActivate{
  
  email!: string;
  password! : string;
  login =new Login();
  rol = new Rol();
  constructor(private usuarioService:UsuarioService, private router: Router) { }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    //verificamos si esta logeado
    let respuesta = this.usuarioService.estaLogeado();
    let intentos = 0;
    if(respuesta== 1 || respuesta==2){
      if(respuesta==2){
        //expiro el token
      this.refresLogin();
      while(true){
        await this.delay(1500);
        respuesta = this.usuarioService.estaLogeado();
        console.log("Respuesta"+respuesta);
        if(respuesta==1){
          break;
        }
        intentos++;
        if(intentos == 3){
          //se intenta 3 veces sin resultados
          //borramos datos guardadados
          
          this.usuarioService.cerrarSession();
          return false;
        }
      }

    }
      //esta logeado
      //extraemos el rol
      let token = sessionStorage.getItem(environment.TOKEN);
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token?.toString());
      this.usuarioService.consultarRol(decodedToken.sub).subscribe(data =>{
        this.rol=data;
      })
      let url = state.url;
      //admin
      if (url.includes('/posts') && decodedToken.permisos[1] == 'Administrador')
        return true;
      else if(url.includes('/cancionOp') && decodedToken.permisos[1] == 'Administrador')
         return true;
         else if(url.includes('/albumOp') && decodedToken.permisos[1] == 'Administrador')
         return true;
         else if(url.includes('/') && decodedToken.permisos[1] == 'Administrador')
         return true;

         //cliente
         else if(url.includes('/catalogo') && decodedToken.permisos[1] == 'Cliente')
         return true;
         else if(url.includes('/carrito') && decodedToken.permisos[1] == 'Cliente')
         return true;
      else {
        //this.router.navigateByUrl('/401Invalid');
        this.router.navigate(['/401Invalid']);
      }
      ////////
    }else{
      //no esta logeada
      console.log("no esta logeado");
      this.router.navigateByUrl('/log');
    }
    return false;
  }
  
  private refresLogin(){
    let token = sessionStorage.getItem(environment.TOKEN);
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token?.toString());
    //let auxcorre = CryptoJS.AES.decrypt(environment.CORREO.trim(), decodedToken.nameid.trim()).toString();
    this.login.email = atob(sessionStorage.getItem("email")!);
    this.login.password =  atob(sessionStorage.getItem("password")!);
    console.log(this.login);
    this.usuarioService.loginToken(this.login).subscribe(data =>{
      console.log("entro");
      sessionStorage.setItem(environment.TOKEN, data.token);
    });
  }

  private delay(ms : number){
    //dormir
    return new Promise(resolve => setTimeout(resolve,ms));
  }


  getEmail(email : string){
    this.email=email;
  }
  getPassword(password : string){
    this.password=password;
  }
  setEmail(){
    return this.email;
  }
  setPassword(){
    return this.password;
  }

}
