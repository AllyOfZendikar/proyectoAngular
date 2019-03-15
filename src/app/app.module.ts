import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { VideosComponent } from './components/videos/videos.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { PosicionesComponent } from './components/posiciones/posiciones.component';
import { ResultadosComponent } from './components/resultados/resultados.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NoticiasComponent,
    VideosComponent,
    EstadisticasComponent,
    PosicionesComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
