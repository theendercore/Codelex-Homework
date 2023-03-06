import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  StatusTypeList,
  ConstructedMovie,
  RatingTypeList,
} from 'src/app/models/Movies';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
})
export class MovieFormComponent {
  // @Output() addAnimal = new EventEmitter<AnimalConstruct>();
  statusList = [...StatusTypeList];
  ratingList = [...RatingTypeList].filter((e) => e !== null);

  movie = new ConstructedMovie('', null, '', null);

  onSubmit(form: FormGroup) {
    console.debug(form.value);
    // this.addAnimal.emit(form.value);
    form.reset();
  }
}
