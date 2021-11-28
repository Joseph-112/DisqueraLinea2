import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Login } from '../_model/Login';
import { Token } from 'src/app/_model/Token';
import { Usuario } from '../_model/Usuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = environment.HOST;

  constructor(private http:HttpClient) { 

  }


  loginToken(login:Login ){
    return this.http.post<Usuario>(this.url+'/Disco/api/auth/login',login);
  }

  actualizarToken(id : number){
    return this.http.put(this.url+'/Disco/api/auth/actualizarToken/'+id,null);
  }
}
