import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlbumDto } from 'src/app/_model/AlbumDto';
import { Artista } from 'src/app/_model/Artista';
import { CancionDto } from 'src/app/_model/CancionDto';
import { AlbumService } from 'src/app/_service/album.service';
import { ArtistaService } from 'src/app/_service/artista.service';
import { CancionService } from 'src/app/_service/cancion.service';

@Component({
  selector: 'app-form-cancion',
  templateUrl: './form-cancion.component.html',
  styleUrls: ['./form-cancion.component.css']
})
export class FormCancionComponent implements OnInit {

  minDate = new Date(2000, 11, 30);
  maxDate = new Date(2026, 11, 30);
  public artistas = new Array<Artista>();
  public albums = new Array<AlbumDto>();
  private cancion = new CancionDto();
  count! : boolean;

  constructor(private artistaService : ArtistaService,
    private albumService : AlbumService,
    private cancionService : CancionService,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.refrescar();
  }

  refrescar(){
    this.artistaService.listarTodos().subscribe(data=>{
      this.artistas = data;
    });
  }

  guardarCancion(){
    this.cancion.nombre = ((document.getElementById("nombre") as HTMLInputElement).value);
    this.cancion.descripcion= ((document.getElementById("descripcion") as HTMLInputElement).value);
    this.cancion.duracion = ((document.getElementById("duracion") as HTMLInputElement).valueAsNumber);
    this.cancion.nacionalidad= ((document.getElementById("nacionalidad") as HTMLInputElement).value);
    this.cancion.precio = ((document.getElementById("precio") as HTMLInputElement).valueAsNumber);
    this.cancion.numVentas = ((document.getElementById("numVentas") as HTMLInputElement).valueAsNumber);
    this.cancion.imagen = "/.jpg";
    this.cancionService.guardar(this.cancion).subscribe(data =>{
      this.openSnackBar('Cancion guardada satisfactoriamente','Info');
    })
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let str = event.value?.toLocaleDateString();    
    let splitted = str?.split("/", 3); 
    let fecha = splitted![2]+"-"+splitted![1]+"-"+splitted![0];
    this.cancion.fLanzamiento = (fecha).toString();
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
  
  changeRatioArtista(event: MatSelectChange) {
    this.cancion.idArtista = event.value;
    this.albumService.listarIdArtista(event.value).subscribe(data =>{
      this.albums=data;
      
      if(this.albums.length == 0){
        this.count = true;
        this.openSnackBar('Este artista no posse albums, por favor cambie de artista o registre un album','Info');
      }else{
        this.count=false;
      }
    })
  }
  changeRatioAlbum(event: MatSelectChange) {
    this.cancion.idAlbum = event.value;
  }
  
}

interface Genero {
  value: string;
  viewValue: string;
}


