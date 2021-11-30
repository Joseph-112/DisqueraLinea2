import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Carrito } from '../_model/Carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  url: string = environment.HOST;

  constructor(private http:HttpClient) { 

  }

  listarTodos(){
    return this.http.get<Carrito[]>(this.url+'/Disco/api/Carrito/listarTodos');
  }

  guardar(album:Carrito){
    return this.http.post(this.url+'/Disco/api/Carrito/guardar',album);
  }
}
