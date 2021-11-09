import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';




@Component({
  selector: 'app-widget-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {

  chartOptions!: {};
  Highcharts = Highcharts;
  constructor() { }



  ngOnInit(): void {

    this.chartOptions = {
      chart: {
          type: 'column'
      },
      title: {
          text: 'A1: BARRERAS PARA EL APRENDIZAJE Y LA PARTICIPACIÓN'
      },
      subtitle: {
          text: 'Fuente: Propia'
      },
      credits: {
        enabled: false
      },
      exporting:{
        enabled: true
      },
      xAxis: {
          categories: [
              'Contaduría pública',
              'Administración de empresas',
              'Psicología',
              'Ing. Sistemas',
              'Ing. Agronomica',
              'Ing. Ambiental',
              /*'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec'*/
          ],
          crosshair: true
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Porcentaje (%)'
          }
      },
      tooltip: {
          headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
          footerFormat: '</table>',
          shared: true,
          useHTML: true
      },
      plotOptions: {
          column: {
              pointPadding: 0.2,
              borderWidth: 0
          }
      },
      series: [{
          name: 'Existe y se implementa',
          data: [55.17, 36.22, 41.72, 71.89, 63.16, 60.00/*, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4*/]
  
      }, {
          name: 'Existe y no se implementa',
          data: [11.76, 19.90, 15.89, 7.57, 13.82, 7.14/*, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3*/]
  
      }, {
          name: 'No existe',
          data: [8.52, 10.71, 18.54, 2.70, 13.16, 10.00/*, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2*/]
  
      }, {
          name: 'No sabe',
          data: [24.54, 33.16, 23.84, 17.84, 9.87, 22.86/*, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1*/]
  
      }]
  };
  HC_exporting(Highcharts);
  setTimeout(()=>{
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);

  }

}
