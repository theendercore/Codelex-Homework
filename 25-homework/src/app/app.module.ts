import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AnimalListPageComponent } from './pages/animal-list-page/animal-list-page.component';
import { MovieListPageComponent } from './pages/movie-list-page/movie-list-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AnimalFormComponent } from './pages/animal-list-page/components/animal-form/animal-form.component';
import { FilterSwitchComponent } from './pages/animal-list-page/components/filter-switch/filter-switch.component';
import { AnimalListComponent } from './pages/animal-list-page/components/animal-list/animal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalFormComponent,
    FilterSwitchComponent,
    AnimalListComponent,
    AnimalListPageComponent,
    MovieListPageComponent,
    HomePageComponent,
    PageNotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
