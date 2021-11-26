import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlbumDto } from 'src/app/_model/AlbumDto';
import { AlbumService } from 'src/app/_service/album.service';

@Component({
  selector: 'app-form-album-eliminar',
  templateUrl: './form-album-eliminar.component.html',
  styleUrls: ['./form-album-eliminar.component.css']
})
export class FormAlbumEliminarComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'duracion', 'precio', 'imagen', 'fLanzamiento','numVentas' ,'eliminar'];
  dataSource = new MatTableDataSource <AlbumDto>();
  nombreArtista! : String;

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private albumService : AlbumService,
    public dialog: MatDialog,
    private _snackBar : MatSnackBar) { }

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
  
  eliminarAlbum(id : number){
    this.albumService.eliminar(id).subscribe(data =>{
      this.openSnackBar('Album eliminado satisfactoriamente','Info');
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

