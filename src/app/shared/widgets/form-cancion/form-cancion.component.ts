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
  artistas: Artista[] = [
    {value: 'james', viewValue: 'James'},
    {value: 'dave', viewValue: 'Dave'},
    {value: 'angus', viewValue: 'Angus'},
  ];
}

interface Artista {
  value: string;
  viewValue: string;
}
