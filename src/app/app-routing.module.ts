import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: 'noticias', component: NoticiasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
