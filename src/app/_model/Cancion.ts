import { Album } from "./Album";
import { Artista } from "./Artista";

export class Cancion{
    id!: number;
    nombre!: String;
    descripcion!: String; 
    duracion!: number;
    nacionalidad!: String; 
    precio!: number;
    imagen!: String;
    fLanzamiento:any;
    numVentas!: number;
    artista!: Artista;
    album!: Album;
}