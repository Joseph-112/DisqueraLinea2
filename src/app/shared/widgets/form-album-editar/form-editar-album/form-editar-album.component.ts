import { Component, Inject, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlbumDto } from 'src/app/_model/AlbumDto';
import { Artista } from 'src/app/_model/Artista';
import { AlbumService } from 'src/app/_service/album.service';
import { ArtistaService } from 'src/app/_service/artista.service';

@Component({
  selector: 'app-form-editar-album',
  templateUrl: './form-editar-album.component.html',
  styleUrls: ['./form-editar-album.component.css']
})
export class FormEditarAlbumComponent implements OnInit {

  public artistas = new Array<Artista>();
  public nomArtista = new Artista();
  public album = new AlbumDto();
  startDate = new Date(2021, 0, 1);
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2021, 11, 1);
  constructor(private artistaService : ArtistaService,
    private albumService : AlbumService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.refrescar();
  }

  refrescar(){
    console.log(this.data.idAlbumEditar);
    this.artistaService.listarTodos().subscribe(data=>{
      this.artistas = data;
    });
    this.albumService.listarPorId(this.data.idAlbumEditar).subscribe(data =>{
      this.album = data;
      this.artistaService.listarPorId(this.album.idArtista).subscribe(data=>{
        this.nomArtista = data;
      })
    });
    
  }

  editarAlbum(){
    this.album.nombre = ((document.getElementById("nombre") as HTMLInputElement).value);
    this.album.descripcion= ((document.getElementById("descripcion") as HTMLInputElement).value);
    this.album.duracion = ((document.getElementById("duracion") as HTMLInputElement).valueAsNumber);
    this.album.precio = ((document.getElementById("precio") as HTMLInputElement).valueAsNumber);
    this.album.numVentas = ((document.getElementById("numVentas") as HTMLInputElement).value);
    console.log(this.album)
    this.albumService.editar(this.album).subscribe(data =>{
      this.openSnackBar('Album editado satisfactoriamente','Info');
    })
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let str = event.value?.toLocaleDateString();    
    let splitted = str?.split("/", 3); 
    let fecha = splitted![2]+"-"+splitted![1]+"-"+splitted![0];
    this.album.fLanzamiento = (fecha);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
        duration: 3000
    });
  }
  
  changeRatio(event: MatSelectChange) {
    this.album.idArtista = event.value;
  }
  
}

interface Genero {
  value: string;
  viewValue: string;
}



