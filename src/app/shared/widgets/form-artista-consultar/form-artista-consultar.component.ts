import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/_model/Album';
import { Artista } from 'src/app/_model/Artista';
import { Cancion } from 'src/app/_model/Cancion';
import { ArtistaService } from 'src/app/_service/artista.service';
import { DetalleAlbumService } from 'src/app/_service/detalle-album.service';
import { DetalleCancionService } from 'src/app/_service/detalle-cancion.service';
import { FormAlbumDetalleComponent } from './form-album-detalle/form-album-detalle.component';
import { FormCancionDetalleComponent } from './form-cancion-detalle/form-cancion-detalle.component';

@Component({
  selector: 'app-form-artista-consultar',
  templateUrl: './form-artista-consultar.component.html',
  styleUrls: ['./form-artista-consultar.component.css']
})




export class FormArtistaConsultarComponent implements OnInit {

  @Output()detalleAlbum = Array<Album>();
  detalleCancion = Array<Cancion>();

  displayedColumns: string[] = ['id', 'nombre', 'nombreArtistico', 'genero', 'nacionalidad', 'imagen', 'fNacimiento','albunes','canciones'];
  dataSource = new MatTableDataSource <Artista>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private artistaService : ArtistaService,
    public route: ActivatedRoute,
    private detalleAlbumService : DetalleAlbumService,
    private detalleCancionService : DetalleCancionService,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.refrescar();
  }
  refrescar(){
    
    this.artistaService.listarTodos().subscribe(data =>{
      console.log(data);
      let elementos : Artista[] = data;
      this.dataSource = new MatTableDataSource(elementos);
      this.dataSource.sort= this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
  
  verAlbunes(albumnes : Album[]){
    
   this.detalleAlbumService.setDetalle(albumnes);
   this.detalleAlbumService.setAuteriorUrl("/"); 
   const dialogRef = this.dialog.open(FormAlbumDetalleComponent);
  }
  verCanciones(canciones : Cancion[]){
    console.log(canciones);
    this.detalleCancionService.setDetalle(canciones);
    this.detalleCancionService.setAuteriorUrl("/"); 
    const dialogRef = this.dialog.open(FormCancionDetalleComponent);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
