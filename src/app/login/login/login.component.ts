import { Component, OnInit, enableProdMode, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/_service/usuario.service';
import { Login } from 'src/app/_model/Login';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Token } from 'src/app/_model/Token';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Usuario } from 'src/app/_model/Usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sideBarOpen = false;
  login = new Login();
  usuario = new Usuario();
  rol! : number;
  constructor(private router: Router,
    public usuarioService: UsuarioService,
    private snackBar: MatSnackBar) {

  }
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {

  }

  openLogin(email: String, password: String) {
    this.login.email = email;
    this.login.password = password;
    this.usuarioService.loginToken(this.login).subscribe(data => {
      sessionStorage.setItem(environment.TOKEN, data.token.toString());
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(data.token.toString());
     this.usuario = data;
     if(this.usuario.rol.id == 1) {
      this.router.navigateByUrl('/posts');
      }else if(this.usuario.rol.id == 2) {
        //cliente
        this.router.navigateByUrl('/');
        }
    },err => {
    this.openSnackBar('Usuario y/o cotrasena inconrrecta', 'Advertrencia')
    });


  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }



  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }


}



