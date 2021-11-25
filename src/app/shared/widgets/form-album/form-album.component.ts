import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-album',
  templateUrl: './form-album.component.html',
  styleUrls: ['./form-album.component.css']
})
export class FormAlbumComponent implements OnInit {

  startDate = new Date(2021, 0, 1);
  minDate = new Date(2000, 0, 1);
  maxDate = new Date(2021, 11, 1);
  constructor() { }

  ngOnInit(): void {
  }
  generos: Genero[] = [
    {value: 'rock', viewValue: 'Rock'},
    {value: 'metal', viewValue: 'Metal'},
    {value: 'pop', viewValue: 'Pop'},
  ];

  
}

interface Genero {
  value: string;
  viewValue: string;
}



