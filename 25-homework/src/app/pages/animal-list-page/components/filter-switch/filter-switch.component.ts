import { Component, EventEmitter, Output } from '@angular/core';
import { AnimalType, AnimalTypeList } from 'src/app/models/Animal';
import { AnimalApiService } from 'src/app/services/animal-api.service';

@Component({
  selector: 'app-filter-switch',
  templateUrl: './filter-switch.component.html',
})
export class FilterSwitchComponent {
  private animalTypes: Array<AnimalType | 'All'> = ['All', ...AnimalTypeList];
  state: AnimalType | 'All' = 'All';
  @Output() updateSwitch = new EventEmitter<void>();

  constructor(private animalAPI: AnimalApiService) {}

  onClick() {
    this.animalTypes.push(this.animalTypes.shift() || 'All');
    this.state = this.animalTypes[0];
    this.animalAPI.setFilter(this.state === 'All' ? null : this.state);
    this.updateSwitch.emit();
  }
}
