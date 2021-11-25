import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Artista } from 'src/app/_model/Artista';
import { ArtistaService } from 'src/app/_service/artista.service';

@Component({
  selector: 'app-form-album-consultar',
  templateUrl: './form-album-consultar.component.html',
  styleUrls: ['./form-album-consultar.component.css']
})
export class FormAlbumConsultarComponent implements OnInit {

  ngOnInit(): void {
    
  }
  

}
