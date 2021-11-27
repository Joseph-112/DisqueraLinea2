import { Component, OnInit } from '@angular/core';
import { CalendarioComponent } from 'src/app/shared/widgets/calendario/calendario.component';
import { FormArtistaComponent } from 'src/app/shared/widgets/form-artista/form-artista.component';
import {MatDialog} from '@angular/material/dialog';
import { FormAlbumComponent } from './../../shared/widgets/form-album/form-album.component';
import { FormAlbumEliminarComponent } from 'src/app/shared/widgets/form-album-eliminar/form-album-eliminar.component';
import { FormAlbumConsultarComponent } from './../../shared/widgets/form-album-consultar/form-album-consultar.component';
import { FormAlbumEditarComponent } from './../../shared/widgets/form-album-editar/form-album-editar.component';
import { FormArtistaEliminarComponent } from './../../shared/widgets/form-artista-eliminar/form-artista-eliminar.component';
import { FormArtistaConsultarComponent } from 'src/app/shared/widgets/form-artista-consultar/form-artista-consultar.component';
import { FormArtistaEditarComponent } from 'src/app/shared/widgets/form-artista-editar/form-artista-editar.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }
  openDialogArtista() {
    const dialogRef = this.dialog.open( FormArtistaComponent);
  }

  openDialogEliminarArtista(){
    const dialogRef = this.dialog.open(FormArtistaEliminarComponent)
  }
  openDialogConsultarArtista(){
    const dialogRef= this.dialog.open(FormArtistaConsultarComponent)
  }
  openDialogEditarArtista(){
    const dialogRef= this.dialog.open(FormArtistaEditarComponent)

  }
  

}
