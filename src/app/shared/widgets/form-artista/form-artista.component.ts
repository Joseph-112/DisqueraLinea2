import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-form-artista',
  templateUrl: './form-artista.component.html',
  styleUrls: ['./form-artista.component.css']
})
export class FormArtistaComponent implements OnInit {

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
