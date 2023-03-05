import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Animal, AnimalTypeList } from '../../models/Animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
})
export class AnimalListComponent {
  @Input() animalList!: Animal[];
  @Output() removeAnimal = new EventEmitter<string>();
  constructor(private restAPI: RestApiService) {}

  deleteAnimal(id: string) {
      this.removeAnimal.emit(id)
  }
}
