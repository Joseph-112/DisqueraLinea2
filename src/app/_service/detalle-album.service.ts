import { Injectable } from '@angular/core';
import { Album } from '../_model/Album';

@Injectable({
  providedIn: 'root'
})
export class DetalleAlbumService {
  detalleAlbum = Array<Album>();
  anteriorUrl! : string;
  constructor() { }

  setDetalle(detalle : Album[]){
    this.detalleAlbum = detalle;
  }

  getDetalle(){
    return this.detalleAlbum;
  }
  setAuteriorUrl(url : string){
    this.anteriorUrl=url;
  }

  getAnteriorUrl(){
    return this.anteriorUrl;
  }
}

