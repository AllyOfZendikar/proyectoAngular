import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { VideosComponent } from './videos/videos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';


const routes: Routes = [
  {path: 'noticias', component: NoticiasComponent},
  {path: 'videos', component: VideosComponent},
  {path: 'estadisticas', component: EstadisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
