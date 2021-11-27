import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ViewArtistaAlbum } from '../_model/ViewArtistaAlbum';
import { ViewArtistaCancion } from '../_model/ViewArtistaCancion';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  url: string = environment.HOST;

  constructor(private http:HttpClient) { 

  }

  listarCatalogoCanciones(){
    console.log(this.http.get<ViewArtistaCancion[]>(this.url+'/Disco/api/Canciones/listarCatalogo'));
    return this.http.get<ViewArtistaCancion[]>(this.url+'/Disco/api/Canciones/listarCatalogo');
    
  }

  listarCatalogoAlbumes(){
    console.log(this.http.get<ViewArtistaAlbum[]>(this.url+'/Disco/api/Albums/listarCatalogo'));
    return this.http.get<ViewArtistaAlbum[]>(this.url+'/Disco/api/Albums/listarCatalogo');
    
  }
}