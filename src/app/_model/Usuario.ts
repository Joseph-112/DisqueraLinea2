import { Rol } from "./Rol";

export class Usuario{
    id!: number;
    documento!: String;
    email!: String; 
    imagen!: String;
    nombre!: String;
    passwword!: String;
    fNacimiento:any;
    rol!: Rol;
    token!: String[];

}