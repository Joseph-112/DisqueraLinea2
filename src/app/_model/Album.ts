import { Artista } from "./Artista";
import { Cancion } from "./Cancion";

export class Album{
    id!: number;
    nombre!: String;
    descripcion!: String; 
    duracion!: number;
    precio!: number;
    imagen!: String;
    fLanzamiento:any;
    numVentas:any;
    artista!: Artista;
    canciones!: Cancion[];
}