import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Artista } from '../_model/Artista';
import { Cancion } from '../_model/Cancion';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  url: string = environment.HOST;

  constructor(private http:HttpClient) { 

  }

  listarTodos(){
    return this.http.get<Artista[]>(this.url+'/Disco/api/Artistas/listarTodos');
  }

  listarPorId(id:number){
    return this.http.get<Artista>(this.url+'/Disco/api/Artistas/listarPorId/'+id);
  }

  guardar(artista:Artista){
    return this.http.post(this.url+'/Disco/api/Artistas/guardar',artista);
  }
  eliminar(id:number){
    return this.http.delete(this.url+'/Disco/api/Artistas/eliminar/'+id);
  }
  editar(artista:Artista){
    return this.http.put(this.url+'/Disco/api/Artistas/editar',artista);
  }
}
