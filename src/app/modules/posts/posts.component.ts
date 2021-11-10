import { Component, OnInit } from '@angular/core';
import { CalendarioComponent } from 'src/app/shared/widgets/calendario/calendario.component';
import { FormArtistaComponent } from 'src/app/shared/widgets/form-artista/form-artista.component';
import {MatDialog} from '@angular/material/dialog';

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

  openDialogCancion() {
    const dialogRef = this.dialog.open( FormArtistaComponent);
  }

}
