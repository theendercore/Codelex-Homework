import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  @Input() animalList!: Animal[];
  @Output() removeAnimal = new EventEmitter<string>();

  deleteAnimal(id: string) {
      this.removeAnimal.emit(id)
  }
}
