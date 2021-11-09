import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prog-fechas',
  templateUrl: './prog-fechas.component.html',
  styleUrls: ['./prog-fechas.component.css']
})
export class ProgFechasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  eventoClick(){
    console.log('Hola mundo!!!');
  }

}
