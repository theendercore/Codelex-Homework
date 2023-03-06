import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { MovieApiService } from '../services/movie-api.service';
import {
  add,
  load,
  setMovies,
  addMovie,
  remove,
  removeMovie,
} from './movies.actions';

@Injectable()
export class MovieEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(load),
      exhaustMap(({ filter }) =>
        this.moviesAPI.getAll(filter).pipe(
          map((movies) => setMovies({ movies })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(add),
      exhaustMap(({ movie }) =>
        this.moviesAPI.addOne(movie).pipe(
          map((movie) => addMovie({ movie })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  removeMovie$ = createEffect(() =>
    this.actions$.pipe(
      ofType(remove),
      exhaustMap(({ id }) =>
        this.moviesAPI.deleteOne(id).pipe(
          map(() => removeMovie({ id })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private moviesAPI: MovieApiService) {}
}
