import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { VideosComponent } from './videos/videos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { HttpClientModule } from '@angular/common/http';
import { AsideComponent } from './component/aside/aside.component';
import { ResultadosComponent } from './components/resultados/resultados.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NoticiasComponent,
    VideosComponent,
    EstadisticasComponent,
    AsideComponent,
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
