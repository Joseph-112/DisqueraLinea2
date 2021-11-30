import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Carrito } from 'src/app/_model/Carrito';
import { CarritoService } from 'src/app/_service/carrito.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  
  carrito = new Carrito();

  constructor(private _snackBar: MatSnackBar, private carritoService: CarritoService,
    public route: ActivatedRoute, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    console.log(this.data);
  }

  comprar(){
    for (let index = 0; index < this.data.length; index++) {
      const element = this.data[index];
      this.carrito.total = element.precio;
      this.carritoService.guardar(this.carrito).subscribe(data2 =>{
        console.log(this.carrito);
      this.openSnackBar('Compra realizada!!!','Info');
      })
    }
      
     /*this.artistaService.guardar(this.artista).subscribe(data =>{
      console.log(this.artista);
      this.openSnackBar('Artista registrado satisfactoriamente','Info');
    })*/
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000
    });
  }
}
