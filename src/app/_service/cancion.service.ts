import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cancion } from '../_model/Cancion';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  url: string = environment.HOST;

  constructor(private http:HttpClient) { 

  }

  listarTodos(){
    return this.http.get<Cancion[]>(this.url+'/Disco/api/Canciones/listarTodos');
  }

  listarPorId(id:number){
    return this.http.get<Cancion>(this.url+'/Disco/api/Canciones/listarPorId/'+id);
  }

  guardar(cancion:Cancion){
    return this.http.post(this.url+'/Disco/api/Canciones/guardar',cancion);
  }
  eliminar(id:number){
    return this.http.delete(this.url+'/Disco/api/Canciones/eliminar/'+id);
  }
  editar(cancion:Cancion){
    return this.http.put(this.url+'/Disco/api/Canciones/editar',cancion);
  }
}
