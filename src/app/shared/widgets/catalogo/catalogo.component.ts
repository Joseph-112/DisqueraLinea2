import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewArtistaCancion } from 'src/app/_model/ViewArtistaCancion';
import { CatalogoService } from 'src/app/_service/catalogo.service';
import { MatDialog } from '@angular/material/dialog';
import { CarritoComponent } from './carrito/carrito.component';
//import { MatCardDataSource } from '@angular/material/card';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nombreArtista', 'genero', 'nombreCancion'];
  //dataSource = new MatCardDataSource <Artista>();

  constructor(private catalogoService: CatalogoService,
    public route: ActivatedRoute, public dialog: MatDialog) { }



  ngOnInit(): void {
    this.refrescar();
  }

  refrescar() {

    this.catalogoService.listarCatalogoCanciones().subscribe(data => {
      //console.log(data);
      let elementos: ViewArtistaCancion[] = data;
/*
      let catalogo: Section[] = [{
        id: data['id'],
        nombreArtista: elementos.nombreArtista,
        genero: elementos.genero,
        nombreCancion: elementos.nombreCancion,
        precio: elementos.precio,
        imagen_cancion: elementos.imagen_cancion,
        fLanzamiento: elementos.fLanzamiento
      }];*/
      Object.assign(this.canciones,elementos);

      //console.log(typeof (elementos));
      //console.log(this.canciones);
    });
  }

  comprar(cancion: any){
    console.log(cancion);
    this.cancionesCarrito.push(cancion);
    console.log(this.cancionesCarrito);
    console.log(this.cancionesCarrito.length);
  }

  carritoDialog(){
    const dialogRef = this.dialog.open( CarritoComponent , {data: this.cancionesCarrito});
  }

  cancionesCarrito: Section[] = [

  ]

  canciones: Section[] = [
    
  ]
}

export interface Section {
  id_artista: number;
  id_cancion:number;
  nombreArtistico: String;
  genero: String;
  nombreCancion: String;
  precio: number;
  imagen_cancion: String;
  fLanzamiento: any;
}


