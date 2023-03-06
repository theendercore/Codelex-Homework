import { Component, EventEmitter, Output } from '@angular/core';
import { AnimalType, AnimalTypeList } from 'src/app/models/Animal';
import { AnimalApiService } from 'src/app/services/animal-api.service';

@Component({
  selector: 'app-filter-switch',
  templateUrl: './animal-filter-switch.component.html',
})
export class AnimalFilterSwitchComponent {
  private animalTypes: Array<AnimalType | 'All'> = ['All', ...AnimalTypeList];
  state: AnimalType | 'All' = 'All';
  @Output() updateSwitch = new EventEmitter<AnimalType | 'All'>();

  constructor(private animalAPI: AnimalApiService) {}

  onClick() {
    this.animalTypes.push(this.animalTypes.shift() || 'All');
    this.state = this.animalTypes[0];
    this.updateSwitch.emit(this.state);
  }
}
