import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalListPageComponent } from './pages/animal-list-page/animal-list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MovieListPageComponent } from './pages/movie-list-page/movie-list-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'movies', component: MovieListPageComponent },
  { path: 'animals', component: AnimalListPageComponent },
   { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
