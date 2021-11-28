import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CancionDto } from 'src/app/_model/CancionDto';
import { AlbumService } from 'src/app/_service/album.service';
import { CancionService } from 'src/app/_service/cancion.service';
import { FormEditarCancionComponent } from './form-editar-cancion/form-editar-cancion.component';

@Component({
  selector: 'app-form-cancion-editar',
  templateUrl: './form-cancion-editar.component.html',
  styleUrls: ['./form-cancion-editar.component.css']
})
export class FormCancionEditarComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'duracion', 'precio', 'imagen', 'fLanzamiento','numVentas' ,'editar'];
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
  
  editarCancion(idCancionEditar : number){
    this.dialog.open(FormEditarCancionComponent,{data: { idCancionEditar:idCancionEditar}});
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