import { createAction, props } from '@ngrx/store';
import { Movie } from 'src/app/models/Movies';

export const add = createAction(
  '[Movies App] Add',
  props<{ movie: Movie }>()
);

export const remove = createAction(
  '[Movies App] Remove',
  props<{ id: number | string }>()
);

export const setMovies = createAction(
  '[Movies App] Set',
  props<{ movies: Movie[] }>()
);

export const load = createAction(
  '[Movies App] Load'
);

