import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-cancion',
  templateUrl: './form-cancion.component.html',
  styleUrls: ['./form-cancion.component.css']
})
export class FormCancionComponent implements OnInit {

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
