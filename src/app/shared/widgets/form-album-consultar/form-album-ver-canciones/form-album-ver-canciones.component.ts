import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { CancionDto } from 'src/app/_model/CancionDto';
import { CancionService } from 'src/app/_service/cancion.service';

@Component({
  selector: 'app-form-album-ver-canciones',
  templateUrl: './form-album-ver-canciones.component.html',
  styleUrls: ['./form-album-ver-canciones.component.css']
})
export class FormAlbumVerCancionesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'duracion','nacionalidad', 'precio', 'imagen', 'fLanzamiento','numVentas'];
  dataSource = new MatTableDataSource <CancionDto>();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private cancionService : CancionService,
    public route: ActivatedRoute,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

    this.refrescar();
  }
  refrescar(){

    this.cancionService.listarCancioneAlbum(this.data.idAlbum).subscribe(data =>{
      let elementos : CancionDto[] = data;
      this.dataSource = new MatTableDataSource(elementos);
      this.dataSource.sort= this.sort;
      this.dataSource.paginator = this.paginator;
    });

  }
 

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}