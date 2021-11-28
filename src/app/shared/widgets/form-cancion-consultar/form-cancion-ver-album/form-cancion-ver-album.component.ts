import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlbumDto } from 'src/app/_model/AlbumDto';
import { AlbumService } from 'src/app/_service/album.service';
import { ArtistaService } from 'src/app/_service/artista.service';

@Component({
  selector: 'app-form-cancion-ver-album',
  templateUrl: './form-cancion-ver-album.component.html',
  styleUrls: ['./form-cancion-ver-album.component.css']
})
export class FormCancionVerAlbumComponent implements OnInit {

  genero!: String;
  album = new AlbumDto();
  checkDate!: Date;
  constructor(private albumService : AlbumService,
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
    
    this.albumService.listarPorId(this.data.idAlbumCancion).subscribe(data =>{
      this.album=data;
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
