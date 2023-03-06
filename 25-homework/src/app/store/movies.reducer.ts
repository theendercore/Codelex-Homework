import { createReducer, on } from '@ngrx/store';
import { Movie } from '../models/Movies';
import { add, remove, setMovies } from './movies.actions';

export const initialState: Movie[] = [];

export const moviesReducer = createReducer(
  initialState,
  on(add, (state, props) => [...state, props.movie]),
  on(remove, (state, props) => state.filter((movie) => movie.id !== props.id)),
  on(setMovies, (_, props) => [...props.movies])
);
