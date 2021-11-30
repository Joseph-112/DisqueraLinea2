import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Album } from '../_model/Album';
import { AlbumDto } from '../_model/AlbumDto';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  url: string = environment.HOST;

  constructor(private http:HttpClient) { 

  }

  listarTodos(){
    return this.http.get<AlbumDto[]>(this.url+'/Disco/api/Albums/obtener');
  }

  listarIdArtista(idArtista :number){
    return this.http.get<AlbumDto[]>(this.url+'/Disco/api/Albums/listarIdArtista/'+idArtista);
  }

  listarPorId(id:number){
    return this.http.get<AlbumDto>(this.url+'/Disco/api/Albums/obtenerPorId/'+id);
  }

  guardar(album:AlbumDto){
    return this.http.post(this.url+'/Disco/api/Albums/guardar',album);
  }
  eliminar(id:number){
    return this.http.delete(this.url+'/Disco/api/Albums/eliminar/'+id);
  }
  editar(album:AlbumDto){
    return this.http.put(this.url+'/Disco/api/Albums/editar',album);
  }
}
