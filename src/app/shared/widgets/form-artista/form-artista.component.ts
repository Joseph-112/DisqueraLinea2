import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
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
  startDate = new Date(2014, 0, 1);
  minDate = new Date(1980, 0, 1);
  maxDate = new Date(2016, 11, 31);

  genero!: String;
  artista = new Artista();
  date = new Date();

  checkDate!: Date;
  constructor(private artistaService: ArtistaService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  generos: Genero[] = [
    { value: 'rock', viewValue: 'Rock' },
    { value: 'metal', viewValue: 'Metal' },
    { value: 'pop', viewValue: 'Pop' },
  ];

  guardarArtista(){
    let nombre= ((document.getElementById("nombre") as HTMLInputElement).value);
      let nomArtistico= ((document.getElementById("nomArtistico") as HTMLInputElement).value);
      let nacionalidad= ((document.getElementById("nacionalidad") as HTMLInputElement).value);
      this.artista.nombre = nombre;
      this.artista.nombreArtistico = nomArtistico;
      this.artista.genero = this.genero;
      this.artista.imagen = "/jose.jpg";
      this.artista.nacionalidad = nacionalidad;
      
     this.artistaService.guardar(this.artista).subscribe(data =>{
      console.log(this.artista);
      this.openSnackBar('Artista registrado satisfactoriamente','Info');
    })
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let str = event.value?.toLocaleDateString();    
    let splitted = str?.split("/", 3); 
    let fecha = splitted![2]+"-"+splitted![1]+"-"+splitted![0];
    this.artista.fNacimiento = (fecha);
  }

  changeRatio(event: MatSelectChange) {
    console.log(event.value);
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


