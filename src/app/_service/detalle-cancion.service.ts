import { Injectable } from '@angular/core';
import { Cancion } from '../_model/Cancion';

@Injectable({
  providedIn: 'root'
})
export class DetalleCancionService {
  detalleCancion = Array<Cancion>();
  anteriorUrl! : string;
  constructor() { }

  setDetalle(detalle : Cancion[]){
    this.detalleCancion = detalle;
  }

  getDetalle(){
    return this.detalleCancion;
  }
  setAuteriorUrl(url : string){
    this.anteriorUrl=url;
  }

  getAnteriorUrl(){
    return this.anteriorUrl;
  }
}