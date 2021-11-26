import { Component, Inject, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Artista } from 'src/app/_model/Artista';
import { ArtistaService } from 'src/app/_service/artista.service';

@Component({
  selector: 'app-form-editar-artista',
  templateUrl: './form-editar-artista.component.html',
  styleUrls: ['./form-editar-artista.component.css']
})
export class FormEditarArtistaComponent implements OnInit {
  genero!: String;
  artista = new Artista();
  artistaEdit = new Artista();
  checkDate!: Date;
  constructor(private artistaService : ArtistaService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
   
    this.refrescar();
  }

  generos: Genero[] = [
    {value: 'rock', viewValue: 'Rock'},
    {value: 'metal', viewValue: 'Metal'},
    {value: 'pop', viewValue: 'Pop'},
  ];

  refrescar(){
    
    this.artistaService.listarPorId(this.data.id_usuario).subscribe(data =>{
      this.artista=data;
      this.artistaEdit.fNacimiento = this.artista.fNacimiento;
      this.artistaEdit.genero = this.artista.genero;
    });
  }
  guardarArtista(){
    let nombre= ((document.getElementById("nombre") as HTMLInputElement).value);
      let nomArtistico= ((document.getElementById("nomArtistico") as HTMLInputElement).value);
      let nacionalidad= ((document.getElementById("nacionalidad") as HTMLInputElement).value);
      this.artistaEdit.id = this.artista.id;
      this.artistaEdit.nombre = nombre;
      this.artistaEdit.nombreArtistico = nomArtistico;
      this.artistaEdit.imagen = "/jose.jpg";
      this.artistaEdit.nacionalidad = nacionalidad;
      
      console.log(this.artistaEdit);
     
     this.artistaService.editar(this.artistaEdit).subscribe(data =>{
      console.log(this.artista);
      this.openSnackBar('Artista editado satisfactoriamente','Info');
    })
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let str = event.value?.toLocaleDateString();    
    let splitted = str?.split("/", 3); 
    let fecha = splitted![2]+"-"+splitted![1]+"-"+splitted![0];
    this.artistaEdit.fNacimiento = (fecha);
  }

  changeRatio(event: MatSelectChange) {
    this.genero = event.value;
    this.artistaEdit.genero = this.genero;
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

