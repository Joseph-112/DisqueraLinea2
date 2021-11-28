import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DefaultComponent } from './default/default.component';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  
  constructor(public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }
  openDialogDefault(){
    this.router.navigateByUrl('/');
  }
  

}
