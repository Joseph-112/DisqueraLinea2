import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AlbumDto } from 'src/app/_model/AlbumDto';
import { AlbumService } from 'src/app/_service/album.service';
import { FormEditarAlbumComponent } from './form-editar-album/form-editar-album.component';

@Component({
  selector: 'app-form-album-editar',
  templateUrl: './form-album-editar.component.html',
  styleUrls: ['./form-album-editar.component.css']
})
export class FormAlbumEditarComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'descripcion', 'duracion', 'precio', 'imagen', 'fLanzamiento','numVentas' ,'editar'];
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
  
  editarAlbum(idEditar : number){
    this.dialog.open(FormEditarAlbumComponent,{data: { idAlbumEditar:idEditar}});
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