import { Component, OnInit, enableProdMode } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FormCancionEditarComponent } from 'src/app/shared/widgets/form-cancion-editar/form-cancion-editar.component';
import { DefaultComponent } from './../../administrador/default/default.component';
import { FormAlbumComponent } from 'src/app/shared/widgets/form-album/form-album.component';
import { AdministradorComponent } from './../../administrador/administrador.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sideBarOpen = false;

  constructor(public dialog: MatDialog) {
    
   }

  ngOnInit(): void {
  }
  
  openDialogEditarcancion(){
    const dialogRef = this.dialog.open(AdministradorComponent);
  }

  sideBarToggler(){
    this.sideBarOpen= !this.sideBarOpen;
  }
  
 
}
