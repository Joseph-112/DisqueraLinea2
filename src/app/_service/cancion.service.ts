import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cancion } from '../_model/Cancion';
import { CancionDto } from '../_model/CancionDto';

@Injectable({
  providedIn: 'root'
})
export class CancionService {

  url: string = environment.HOST;

  constructor(private http:HttpClient) { 

  }

  listarTodos(){
    return this.http.get<CancionDto[]>(this.url+'/Disco/api/Canciones/listarTodos');
  }

  listarCancioneAlbum(id_album : number){
    return this.http.get<CancionDto[]>(this.url+'/Disco/api/Canciones/listarCancionesAlbum/'+id_album);
  }

  listarPorId(id:number){
    return this.http.get<CancionDto>(this.url+'/Disco/api/Canciones/listarPorId/'+id);
  }

  guardar(album:CancionDto){
    return this.http.post(this.url+'/Disco/api/Canciones/guardar',album);
  }
  eliminar(id:number){
    return this.http.delete(this.url+'/Disco/api/Canciones/eliminar/'+id);
  }
  editar(album:CancionDto){
    return this.http.put(this.url+'/Disco/api/Canciones/editar',album);
  }
}
