import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Album } from 'src/app/_model/Album';
import { DetalleAlbumService } from 'src/app/_service/detalle-album.service';

@Component({
  selector: 'app-form-album-detalle',
  templateUrl: './form-album-detalle.component.html',
  styleUrls: ['./form-album-detalle.component.css']
})
export class FormAlbumDetalleComponent implements OnInit {

  detalleAlbum = Array<Album>();
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'duracion', 'precio', 'imagen', 'fLanzamiento','numVentas'];
  dataSource = new MatTableDataSource <Album>();
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private detalleAlbumService : DetalleAlbumService) { }

  ngOnInit(): void {
    this.detalleAlbum = this.detalleAlbumService.getDetalle();
    
    this.dataSource = new MatTableDataSource(this.detalleAlbum);

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
