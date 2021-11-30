import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../_model/Login';
import { Token } from '../_model/Token';
import { Usuario } from '../_model/Usuario';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Rol } from '../_model/Rol';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = environment.HOST;

  constructor(private http:HttpClient) { 

  }


  loginToken(login:Login ){
    return this.http.post<Token>(this.url+'/Disco/api/auth/token',login);
  }
  consultarRol(id:number ){
    return this.http.get<Rol>(this.url+'/Disco/api/auth/consultarRol/'+id);
  }
  actualizarToken(id : number){
    return this.http.put(this.url+'/Disco/api/auth/actualizarToken/'+id,"");
  }

  cerrarSession(){
    let token = sessionStorage.getItem(environment.TOKEN);
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token!);

    return this.http.put(this.url+'/Disco/api/auth/cerrarSession/'+decodedToken.sub,"");
  }
  estaLogeado(): number{
    let token = sessionStorage.getItem(environment.TOKEN);
    
    if(token != null){
      //decodificamos el token
      const helper = new JwtHelperService();
      const isExpired = helper.isTokenExpired(token); 
      
      //si esta expirado
      if(isExpired == true) {
        //devuelta al login
        return 2;
      } else {
        
        //aun activo el usuario
        return 1;
      }
    }else{
      //cancelar no hay nadie
      return 0;
    }
  }
}
