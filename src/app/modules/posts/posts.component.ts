import { Component, OnInit } from '@angular/core';
import { CalendarioComponent } from 'src/app/shared/widgets/calendario/calendario.component';
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
  openDialog() {
    const dialogRef = this.dialog.open( CalendarioComponent);

  }
}
