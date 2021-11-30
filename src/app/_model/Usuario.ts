import { Rol } from "./Rol";

export class Usuario{
    id!: number;
    documento!: String;
    email!: any; 
    imagen!: String;
    nombre!: String;
    passwword!: any;
    fNacimiento:any;
    rol!: Rol;
    token!: any;

}