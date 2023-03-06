import { createReducer, on } from '@ngrx/store';
import { Movie } from '../models/Movies';
import { addMovie, removeMovie, setMovies } from './movies.actions';

export const initialState: Movie[] = [];

export const moviesReducer = createReducer(
  initialState,
  on(addMovie, (state, props) => [...state, props.movie]),
  on(removeMovie, (state, props) => {
    let x = state.filter((movie) => movie.id !== props.id);
    return x
  }),
  on(setMovies, (_, props) => [...props.movies])
);
