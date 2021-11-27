import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/_model/Album';
import { Artista } from 'src/app/_model/Artista';
import { Cancion } from 'src/app/_model/Cancion';
import { ArtistaService } from 'src/app/_service/artista.service';

@Component({
  selector: 'app-form-artista-editar',
  templateUrl: './form-artista-editar.component.html',
  styleUrls: ['./form-artista-editar.component.css']
})
export class FormArtistaEditarComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nombre', 'nombreArtistico', 'genero', 'nacionalidad', 'imagen', 'fNacimiento', 'Editar'];
  dataSource = new MatTableDataSource <Artista>();


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private artistaService : ArtistaService,
    public route: ActivatedRoute) { }

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
  
  

  editar(artista : Artista[]){

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

