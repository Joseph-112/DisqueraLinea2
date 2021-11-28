import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CancionDto } from 'src/app/_model/CancionDto';
import { AlbumService } from 'src/app/_service/album.service';
import { CancionService } from 'src/app/_service/cancion.service';
import { FormCancionVerAlbumComponent } from './form-cancion-ver-album/form-cancion-ver-album.component';
import { FormCancionVerArtistaComponent } from './form-cancion-ver-artista/form-cancion-ver-artista.component';

@Component({
  selector: 'app-form-cancion-consultar',
  templateUrl: './form-cancion-consultar.component.html',
  styleUrls: ['./form-cancion-consultar.component.css']
})
export class FormCancionConsultarComponent implements OnInit {

  
  
  displayedColumns: string[] = ['id', 'nombre', 'descripcion','nacionalidad', 'duracion', 'precio', 'imagen', 'fLanzamiento','numVentas' ,'artista','album'];
  dataSource = new MatTableDataSource <CancionDto>();
  nombreArtista! : String;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private cancionSevice : CancionService,
    public route: ActivatedRoute,
    public dialog: MatDialog) { }

  ngOnInit(): void {

    this.refrescar();
  }
  refrescar(){

    this.cancionSevice.listarTodos().subscribe(data =>{
      let elementos : CancionDto[] = data;
      this.dataSource = new MatTableDataSource(elementos);
      this.dataSource.sort= this.sort;
      this.dataSource.paginator = this.paginator;
    });

  }
  
  verAlbum(idAlbumCancion : number){
    this.dialog.open(FormCancionVerAlbumComponent,{data: { idAlbumCancion:idAlbumCancion}});
  }
  verArtista(idArtistaCancion : number){
    this.dialog.open(FormCancionVerArtistaComponent,{data: { idArtistaCancion:idArtistaCancion}});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

