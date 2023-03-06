import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { MovieApiService } from '../services/movie-api.service';
import { load, setMovies } from './movies.actions';

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(load),
      exhaustMap(() =>
        this.moviesAPI.getAll().pipe(
          map((movies) => setMovies({movies})),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private moviesAPI: MovieApiService) {}
}
