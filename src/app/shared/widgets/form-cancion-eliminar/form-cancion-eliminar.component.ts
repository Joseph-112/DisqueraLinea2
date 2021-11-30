import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CancionDto } from 'src/app/_model/CancionDto';
import { AlbumService } from 'src/app/_service/album.service';
import { CancionService } from 'src/app/_service/cancion.service';

@Component({
  selector: 'app-form-cancion-eliminar',
  templateUrl: './form-cancion-eliminar.component.html',
  styleUrls: ['./form-cancion-eliminar.component.css']
})
export class FormCancionEliminarComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'duracion', 'precio', 'imagen', 'fLanzamiento','numVentas' ,'eliminar'];
  dataSource = new MatTableDataSource <CancionDto>();
  nombreArtista! : String;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private cancionService : CancionService,
    public dialog: MatDialog,
    private _snackBar : MatSnackBar) { }

  ngOnInit(): void {

    this.refrescar();
  }
  refrescar(){

    this.cancionService.listarTodos().subscribe(data =>{
      let elementos : CancionDto[] = data;
      this.dataSource = new MatTableDataSource(elementos);
      this.dataSource.sort= this.sort;
      this.dataSource.paginator = this.paginator;
    });

  }
  
  eliminarCancion(id : number){
    this.cancionService.eliminar(id).subscribe(data =>{
      this.openSnackBar('Cancion eliminada satisfactoriamente','Info');
      this.refrescar();
    })
  }
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
        duration: 3000
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}


