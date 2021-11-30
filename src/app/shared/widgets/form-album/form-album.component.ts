import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlbumDto } from 'src/app/_model/AlbumDto';
import { Artista } from 'src/app/_model/Artista';
import { AlbumService } from 'src/app/_service/album.service';
import { ArtistaService } from 'src/app/_service/artista.service';

@Component({
  selector: 'app-form-album',
  templateUrl: './form-album.component.html',
  styleUrls: ['./form-album.component.css']
})
export class FormAlbumComponent implements OnInit {

  public artistas = new Array<Artista>();
  private album = new AlbumDto();
  
  minDate = new Date(2000, 0, 1);
  
  constructor(private artistaService : ArtistaService,
    private albumService : AlbumService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.refrescar();
  }

  refrescar(){
    this.artistaService.listarTodos().subscribe(data=>{
      this.artistas = data;
    })
  }

  guardarAlbum(){
    this.album.nombre = ((document.getElementById("nombre") as HTMLInputElement).value);
    this.album.descripcion= ((document.getElementById("descripcion") as HTMLInputElement).value);
    this.album.duracion = ((document.getElementById("duracion") as HTMLInputElement).valueAsNumber);
    this.album.precio = ((document.getElementById("precio") as HTMLInputElement).valueAsNumber);
    this.album.numVentas = ((document.getElementById("numVentas") as HTMLInputElement).value);
    this.album.imagen = "/.jpg";
    console.log(this.album)
    this.albumService.guardar(this.album).subscribe(data =>{
      this.openSnackBar('Album guardado satisfactoriamente','Info');
    })
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let str = event.value?.toLocaleDateString();    
    let splitted = str?.split("/", 3); 
    let fecha = splitted![2]+"-"+splitted![1]+"-"+splitted![0];
    this.album.fLanzamiento = (fecha).toString();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
        duration: 3000
    });
  }
  generos: Genero[] = [
    {value: 'rock', viewValue: 'Rock'},
    {value: 'metal', viewValue: 'Metal'},
    {value: 'pop', viewValue: 'Pop'},
  ];
  
  changeRatio(event: MatSelectChange) {
    this.album.idArtista = event.value;
  }
  
}

interface Genero {
  value: string;
  viewValue: string;
}



