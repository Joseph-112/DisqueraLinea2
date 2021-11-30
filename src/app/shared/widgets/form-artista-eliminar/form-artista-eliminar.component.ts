import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Artista } from 'src/app/_model/Artista';
import { ArtistaService } from 'src/app/_service/artista.service';

@Component({
  selector: 'app-form-artista-eliminar',
  templateUrl: './form-artista-eliminar.component.html',
  styleUrls: ['./form-artista-eliminar.component.css']
})
export class FormArtistaEliminarComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'nombreArtistico', 'genero', 'nacionalidad', 'imagen', 'fNacimiento', 'Eliminar'];
  dataSource = new MatTableDataSource <Artista>();


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private artistaService : ArtistaService,
    public route: ActivatedRoute,
    private _snackBar:MatSnackBar) { }
    
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
  
  

  eliminar(id : number){
    this.artistaService.eliminar(id).subscribe(data=>{
      this.refrescar();
      this.openSnackBar("Se elimino el artista correctamente","");
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
        duration: 3000
    });
  }
}


