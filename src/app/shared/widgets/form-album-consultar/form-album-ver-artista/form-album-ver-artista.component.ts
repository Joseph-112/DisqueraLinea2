import { Component, Inject, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Artista } from 'src/app/_model/Artista';
import { ArtistaService } from 'src/app/_service/artista.service';

@Component({
  selector: 'app-form-album-ver-artista',
  templateUrl: './form-album-ver-artista.component.html',
  styleUrls: ['./form-album-ver-artista.component.css']
})
export class FormAlbumVerArtistaComponent implements OnInit {

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
    
    this.artistaService.listarPorId(this.data.idArtista).subscribe(data =>{
      this.artista=data;
    });
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


