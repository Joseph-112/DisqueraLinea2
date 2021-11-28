import { Component, Inject, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlbumDto } from 'src/app/_model/AlbumDto';
import { Artista } from 'src/app/_model/Artista';
import { CancionDto } from 'src/app/_model/CancionDto';
import { AlbumService } from 'src/app/_service/album.service';
import { ArtistaService } from 'src/app/_service/artista.service';
import { CancionService } from 'src/app/_service/cancion.service';

@Component({
  selector: 'app-form-editar-cancion',
  templateUrl: './form-editar-cancion.component.html',
  styleUrls: ['./form-editar-cancion.component.css']
})
export class FormEditarCancionComponent implements OnInit {

  

  public artistas = new Array<Artista>();
  public albums = new Array<AlbumDto>();
  public nomArtista = new Artista();
  public nomAlbum = new AlbumDto();
  public cancion = new CancionDto();
  count! : boolean;
  startDate = new Date(2021, 0, 1);
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2021, 11, 1);
  constructor(private artistaService : ArtistaService,
    private albumService : AlbumService,
    private cancionService : CancionService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.refrescar();
  }

  refrescar(){
    this.cancionService.listarPorId(this.data.idCancionEditar).subscribe(data =>{
      this.cancion = data;
      this.artistaService.listarPorId(this.cancion.idArtista).subscribe(data=>{
        this.nomArtista = data;
      });
      this.albumService.listarPorId(this.cancion.idAlbum).subscribe(data=>{
        this.nomAlbum = data;
      });
    });
    this.artistaService.listarTodos().subscribe(data=>{
      this.artistas = data;
      
    });
  }

  editarCancion(){
    this.cancion.nombre = ((document.getElementById("nombre") as HTMLInputElement).value);
    this.cancion.descripcion= ((document.getElementById("descripcion") as HTMLInputElement).value);
    this.cancion.duracion = ((document.getElementById("duracion") as HTMLInputElement).valueAsNumber);
    this.cancion.nacionalidad= ((document.getElementById("nacionalidad") as HTMLInputElement).value);
    this.cancion.precio = ((document.getElementById("precio") as HTMLInputElement).valueAsNumber);
    this.cancion.numVentas = ((document.getElementById("numVentas") as HTMLInputElement).valueAsNumber);
    this.cancion.imagen = "/.jpg";
    this.cancionService.editar(this.cancion).subscribe(data =>{
      this.openSnackBar('Cancion editada satisfactoriamente','Info');
    })
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    let str = event.value?.toLocaleDateString();    
    let splitted = str?.split("/", 3); 
    let fecha = splitted![2]+"-"+splitted![1]+"-"+splitted![0];
    this.cancion.fLanzamiento = (fecha);
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


