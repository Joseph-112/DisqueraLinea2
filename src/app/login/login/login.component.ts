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
import { Rol } from 'src/app/_model/Rol';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  sideBarOpen = false;
  login = new Login();
  usuario = new Usuario();
  rol = new Rol();
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
      console.log(data);
      sessionStorage.setItem(environment.TOKEN, data.token);
      const helper = new JwtHelperService();
      
      // cifrar variables
      sessionStorage.setItem("email", btoa(email.toString()));
      sessionStorage.setItem("password", btoa(password.toString()));


      const decodedToken = helper.decodeToken(data.token);
      console.log(decodedToken.sub);
      this.usuarioService.consultarRol(decodedToken.sub).subscribe(data2 => {
        console.log(data2);
        this.rol =data2;
        if(this.rol.id == 1) {
          //admin
        
         this.router.navigateByUrl('/posts');
   
         }else if(this.rol.id  == 2) {
           //cliente
           this.router.navigateByUrl('/');
           }
      })
     
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



