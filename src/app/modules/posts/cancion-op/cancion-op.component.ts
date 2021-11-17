import { Component, OnInit } from '@angular/core';
import { CalendarioComponent } from 'src/app/shared/widgets/calendario/calendario.component';
import { FormArtistaComponent } from 'src/app/shared/widgets/form-artista/form-artista.component';
import {MatDialog} from '@angular/material/dialog';
import { FormAlbumComponent } from 'src/app/shared/widgets/form-album/form-album.component';


@Component({
  selector: 'app-cancion-op',
  templateUrl: './cancion-op.component.html',
  styleUrls: ['./cancion-op.component.css']
})
export class CancionOpComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialogArtista() {
    const dialogRef = this.dialog.open( FormArtistaComponent);
  }

  openDialogCancion() {
    const dialogRef = this.dialog.open( FormAlbumComponent);
  }
  openDialogEliminarArtista(){
    
  }

}

 


