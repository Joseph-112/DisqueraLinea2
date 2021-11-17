import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormAlbumComponent } from 'src/app/shared/widgets/form-album/form-album.component';
import { FormAlbumEditarComponent } from './../../../shared/widgets/form-album-editar/form-album-editar.component';
import { FormAlbumEliminarComponent } from './../../../shared/widgets/form-album-eliminar/form-album-eliminar.component';
import { FormAlbumConsultarComponent } from './../../../shared/widgets/form-album-consultar/form-album-consultar.component';

@Component({
  selector: 'app-album-op',
  templateUrl: './album-op.component.html',
  styleUrls: ['./album-op.component.css']
})
export class AlbumOpComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogAlbum() {
    const dialogRef = this.dialog.open( FormAlbumComponent);
  }

  openDialogAlbumEditar() {
    const dialogRef = this.dialog.open(FormAlbumEditarComponent);
  }
  openDialogEliminarAlbum(){
    const dialogRef = this.dialog.open(FormAlbumEliminarComponent);
  }
  openDialogConsultarAlbum(){
    const dialogRef = this.dialog.open(FormAlbumConsultarComponent);
  }

  
  
 





}
