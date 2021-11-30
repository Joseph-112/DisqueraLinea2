import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/_service/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();

  constructor(private usuarioService:UsuarioService,
    private router: Router) { }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }
  cerrarSession(){
    this.usuarioService.cerrarSession().subscribe(data =>{
      this.router.navigateByUrl('/log');
    });
  }
}
