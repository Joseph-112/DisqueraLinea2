import { Album } from "./Album";
import { Cancion } from "./Cancion";
import { Usuario } from "./Usuario";

export class Carrito{
    id!: number;
    album!: Album;
    usuario!:Usuario;
    cancion!: Cancion; 
    total!: number;

}