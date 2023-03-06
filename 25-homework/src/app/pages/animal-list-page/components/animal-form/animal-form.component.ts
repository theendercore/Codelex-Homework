import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AnimalConstruct, AnimalTypeList } from 'src/app/models/Animal';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
})
export class AnimalFormComponent {
  @Output() addAnimal = new EventEmitter<AnimalConstruct>();
  typeList = [...AnimalTypeList];
  animal = new AnimalConstruct('', null);

  onSubmit(form: FormGroup) {
    this.addAnimal.emit(form.value);
    form.reset();
  }
}
