import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/Movies';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { load, remove } from 'src/app/store/movies.actions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  movieList$: Observable<Movie[]> = this.store.select('movies');

  constructor(private store: Store<{ movies: Movie[] }>) {}

  ngOnInit() {
    this.store.dispatch(load({ filter: 'All' }));
  }

  deleteMovie(id: string | number) {
    this.store.dispatch(remove({ id }));
  }
}
