import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Artista } from 'src/app/_model/Artista';
import { ArtistaService } from 'src/app/_service/artista.service';

@Component({
  selector: 'app-form-artista',
  templateUrl: './form-artista.component.html',
  styleUrls: ['./form-artista.component.css']
})
export class FormArtistaComponent implements OnInit {

  genero!: String;
  artista = new Artista();
  date = new Date();
  
  checkDate!: Date;
  constructor(private artistaService : ArtistaService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }


 

  generos: Genero[] = [
    {value: 'rock', viewValue: 'Rock'},
    {value: 'metal', viewValue: 'Metal'},
    {value: 'pop', viewValue: 'Pop'},
  ];

  guardarArtista(){
<<<<<<< HEAD
  
  }
=======
    let nombre= ((document.getElementById("nombre") as HTMLInputElement).value);
      let nomArtistico= ((document.getElementById("nomArtistico") as HTMLInputElement).value);
      let nacionalidad= ((document.getElementById("nacionalidad") as HTMLInputElement).value);
      this.artista.nombre = nombre;
      this.artista.nombreArtistico = nomArtistico;
      this.artista.genero = this.genero;
      this.artista.imagen = "/jose.jpg";
      this.artista.nacionalidad = nacionalidad;
      this.artista.fNacimiento = "2000-06-07";

      console.log(this.artista);
     this.artistaService.guardar(this.artista).subscribe(data =>{
      console.log(this.artista);
      console.log(data);
      this.openSnackBar('Artista registrado satisfactoriamente','Info');
    })
  }
  
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.artista.nombre ="Ivan";
    console.log(this.artista);    
>>>>>>> e31262e6137e2fa79178cdbd1d638ae2a96afde0
}
  
  changeRatio(event: MatSelectChange) {
    this.genero = event.value;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
        duration: 3000
    });
  }
}




interface Genero {
  value: string;
  viewValue: string;
}


