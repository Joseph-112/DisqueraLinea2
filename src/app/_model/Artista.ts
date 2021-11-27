import { Album } from "./Album";
import { Cancion } from "./Cancion";

export class Artista{
    id!: number;
    nombre!: String;
    nombreArtistico!: String; 
    genero!: String;
    nacionalidad!: String;
    imagen!: String;
    fNacimiento:any;
    albunes!: Album[];
    canciones!: Cancion[];

}