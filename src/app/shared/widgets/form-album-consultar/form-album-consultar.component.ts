import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/_model/Album';
import { AlbumDto } from 'src/app/_model/AlbumDto';
import { Artista } from 'src/app/_model/Artista';
import { Cancion } from 'src/app/_model/Cancion';
import { AlbumService } from 'src/app/_service/album.service';
import { FormAlbumVerArtistaComponent } from './form-album-ver-artista/form-album-ver-artista.component';
import { FormAlbumVerCancionesComponent } from './form-album-ver-canciones/form-album-ver-canciones.component';

@Component({
  selector: 'app-form-album-consultar',
  templateUrl: './form-album-consultar.component.html',
  styleUrls: ['./form-album-consultar.component.css']
})
export class FormAlbumConsultarComponent implements OnInit {

  detalleCancion = Array<Cancion>();
  
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'duracion', 'precio', 'imagen', 'fLanzamiento','numVentas' ,'artista','canciones'];
  dataSource = new MatTableDataSource <AlbumDto>();
  nombreArtista! : String;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private albumService : AlbumService,
    public route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.refrescar();
  }
  refrescar(){

    this.albumService.listarTodos().subscribe(data =>{
      let elementos : AlbumDto[] = data;
      this.dataSource = new MatTableDataSource(elementos);
      this.dataSource.sort= this.sort;
      this.dataSource.paginator = this.paginator;
    });

  }
  
  verCanciones(idAlbum : number){
    console.log(idAlbum);
    this.dialog.open(FormAlbumVerCancionesComponent,{data: { idAlbum:idAlbum}});
  }
  verArtista(idArtista : number){
    console.log(idArtista)
    this.dialog.open(FormAlbumVerArtistaComponent,{data: { idArtista:idArtista}});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

