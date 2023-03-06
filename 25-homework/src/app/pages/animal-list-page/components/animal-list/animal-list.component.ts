import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Animal } from 'src/app/models/Animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
})
export class AnimalListComponent {
  @Input() animalList!: Animal[];
  @Output() removeAnimal = new EventEmitter<string>();

  deleteAnimal(id: string) {
    this.removeAnimal.emit(id);
  }
}
