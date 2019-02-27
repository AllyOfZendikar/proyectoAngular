import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { VideosComponent } from './videos/videos.component';


const routes: Routes = [
  {path: 'noticias', component: NoticiasComponent},
  {path: 'videos', component: VideosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
