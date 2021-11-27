import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Cancion } from 'src/app/_model/Cancion';
import { DetalleCancionService } from 'src/app/_service/detalle-cancion.service';

@Component({
  selector: 'app-form-cancion-detalle',
  templateUrl: './form-cancion-detalle.component.html',
  styleUrls: ['./form-cancion-detalle.component.css']
})
export class FormCancionDetalleComponent implements OnInit {
  detalleCancion = Array<Cancion>();
  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'duracion', 'nacionalidad','precio', 'imagen', 'fLanzamiento','numVentas'];
  dataSource = new MatTableDataSource <Cancion>();
  
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private detalleCancionService : DetalleCancionService) { }

  ngOnInit(): void {
    this.detalleCancion = this.detalleCancionService.getDetalle();
    
    this.dataSource = new MatTableDataSource(this.detalleCancion);

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
