import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ProgFechasComponent } from './administrador/prog-fechas/prog-fechas.component';
import { ResultadosComponent } from './administrador/resultados/resultados.component';
import { DocenteComponent } from './docente/docente.component';
import { EncuestaComponent } from './docente/encuesta/encuesta.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { DocumentosComponent } from './administrador/documentos/documentos.component';
import { AdminServiceService } from './admin-service.service';
import { AppRoutingModule} from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './administrador/default/default.module';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    ProgFechasComponent,
    ResultadosComponent,
    DocenteComponent,
    EncuestaComponent,
    EstudianteComponent,
    DocumentosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [AdminServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
