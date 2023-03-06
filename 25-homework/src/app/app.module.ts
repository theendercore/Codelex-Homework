import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalListPageComponent } from './pages/animal-list-page/animal-list-page.component';
import { MovieListPageComponent } from './pages/movie-list-page/movie-list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AnimalFormComponent } from './pages/animal-list-page/components/animal-form/animal-form.component';
import { AnimalFilterSwitchComponent } from './pages/animal-list-page/components/animal-filter-switch/animal-filter-switch.component';
import { AnimalListComponent } from './pages/animal-list-page/components/animal-list/animal-list.component';
import { MovieFilterSwitchComponent } from './pages/movie-list-page/components/filter-switch/movie-filter-switch.component';
import { MovieListComponent } from './pages/movie-list-page/components/movie-list/movie-list.component';
import { MovieFormComponent } from './pages/movie-list-page/components/movie-form/movie-form.component';
import { moviesReducer } from './store/movies.reducer';
import { MovieEffects } from './store/movies.effects';

@NgModule({
  declarations: [
    AppComponent,
    AnimalFormComponent,
    MovieFormComponent,
    AnimalFilterSwitchComponent,
    MovieFilterSwitchComponent,
    AnimalListComponent,
    MovieListComponent,
    AnimalListPageComponent,
    MovieListPageComponent,
    HomePageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ movies: moviesReducer }),
    EffectsModule.forRoot([MovieEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
