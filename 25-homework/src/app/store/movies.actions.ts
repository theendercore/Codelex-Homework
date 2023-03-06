import { createAction, props } from '@ngrx/store';
import { ConstructedMovie, Movie, StatusType } from 'src/app/models/Movies';

//Database Actions
export const load = createAction(
  '[Movies App] Load',
  props<{ filter: StatusType | 'All' }>()
);

export const remove = createAction(
  '[Movies App] remove',
  props<{ id: number | string }>()
);

export const add = createAction(
  '[Movies App] add',
  props<{ movie: ConstructedMovie }>()
);

//Local Actions //! DO NOT CALL THIS DIRECTLY
export const addMovie = createAction(
  '[Movies App] Add Movie',
  props<{ movie: Movie }>()
);

export const removeMovie = createAction(
  '[Movies App] Remove Movie',
  props<{ id: number | string }>()
);

export const setMovies = createAction(
  '[Movies App] Set Movie',
  props<{ movies: Movie[] }>()
);
