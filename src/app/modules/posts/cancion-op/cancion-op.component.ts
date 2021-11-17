import { Component, OnInit } from '@angular/core';
import { CalendarioComponent } from 'src/app/shared/widgets/calendario/calendario.component';
import { FormArtistaComponent } from 'src/app/shared/widgets/form-artista/form-artista.component';
import {MatDialog} from '@angular/material/dialog';
import { FormAlbumComponent } from 'src/app/shared/widgets/form-album/form-album.component';
import { FormCancionComponent } from 'src/app/shared/widgets/form-cancion/form-cancion.component';
import { FormCancionEliminarComponent } from './../../../shared/widgets/form-cancion-eliminar/form-cancion-eliminar.component';
import { FormCancionConsultarComponent } from './../../../shared/widgets/form-cancion-consultar/form-cancion-consultar.component';
import { FormCancionEditarComponent } from './../../../shared/widgets/form-cancion-editar/form-cancion-editar.component';


@Component({
  selector: 'app-cancion-op',
  templateUrl: './cancion-op.component.html',
  styleUrls: ['./cancion-op.component.css']
})
export class CancionOpComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogcancion() {
    const dialogRef = this.dialog.open( FormCancionComponent);
  }

  openDialogEliminarcancion(){
    const dialogRef = this.dialog.open( FormCancionEliminarComponent);
  }

  openDialogConsultarcancion(){
    const dialogRef = this.dialog.open( FormCancionConsultarComponent);
  }

  openDialogEditarcancion(){
    const dialogRef = this.dialog.open(FormCancionEditarComponent);
  }
}

 


