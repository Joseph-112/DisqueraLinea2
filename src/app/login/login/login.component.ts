import { Component, OnInit, enableProdMode, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
import { FormCancionEditarComponent } from 'src/app/shared/widgets/form-cancion-editar/form-cancion-editar.component';
import { DefaultComponent } from './../../administrador/default/default.component';
import { FormAlbumComponent } from 'src/app/shared/widgets/form-album/form-album.component';
import { AdministradorComponent } from './../../administrador/administrador.component';
import { CancionOpComponent } from './../../modules/posts/cancion-op/cancion-op.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sideBarOpen = false;

  constructor(public dialog: MatDialog) {
    
   }
   @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    
  }
  
  

  sideBarToggler(){
    this.sideBarOpen= !this.sideBarOpen;
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }





  
}
  
 

