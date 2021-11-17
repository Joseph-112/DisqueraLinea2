import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { BoxComponent } from './widgets/caja/box.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { CalendarioComponent } from './widgets/calendario/calendario.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormArtistaComponent } from './widgets/form-artista/form-artista.component';
import { FormAlbumComponent } from './widgets/form-album/form-album.component';
import { FormAlbumEliminarComponent } from './widgets/form-album-eliminar/form-album-eliminar.component';
import { FormAlbumConsultarComponent } from './widgets/form-album-consultar/form-album-consultar.component';
import { FormAlbumEditarComponent } from './widgets/form-album-editar/form-album-editar.component';
import { FormArtistaEliminarComponent } from './widgets/form-artista-eliminar/form-artista-eliminar.component';
import { CancionOpComponent } from './../modules/posts/cancion-op/cancion-op.component';
import { FormArtistaConsultarComponent } from './widgets/form-artista-consultar/form-artista-consultar.component';
import { FormArtistaEditarComponent } from './widgets/form-artista-editar/form-artista-editar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BoxComponent,
    CardComponent,
    CalendarioComponent,
    FormArtistaComponent,
    FormAlbumComponent,
    FormAlbumEliminarComponent,
    FormAlbumConsultarComponent,
    FormAlbumEditarComponent,
    FormArtistaEliminarComponent,
    CancionOpComponent,
    FormArtistaConsultarComponent,
    FormArtistaEditarComponent
    
    
  ],
  imports: [
  


  CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatListModule,
    RouterModule,
    HighchartsChartModule,
    MatDialogModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    BoxComponent,
    CardComponent,
    CalendarioComponent
  ]
})
export class SharedModule { }
