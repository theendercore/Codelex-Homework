import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  StatusTypeList,
  ConstructedMovie,
  RatingTypeList,
  Movie,
} from 'src/app/models/Movies';
import { add } from 'src/app/store/movies.actions';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
})
export class MovieFormComponent {
  statusList = [...StatusTypeList];
  ratingList = [...RatingTypeList].filter((e) => e !== null);

  movie = new ConstructedMovie('', null, '', null);
  constructor(private store: Store<{ movies: Movie[] }>) {}

  onSubmit(form: FormGroup) {
    this.store.dispatch(add({ movie: form.value }));
    form.reset();
  }
}
