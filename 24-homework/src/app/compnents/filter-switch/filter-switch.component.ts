import { Component } from '@angular/core';
import { AnimalType, AnimalTypeList } from '../../models/Animal';

@Component({
  selector: 'app-filter-switch',
  templateUrl: './filter-switch.component.html',
})
export class FilterSwitchComponent {
  private animalTypes: Array<AnimalType | 'All'> = ["All", ...AnimalTypeList];
  state: AnimalType | 'All' = 'All';

  onClick() {
    this.animalTypes.push(this.animalTypes.shift() || 'All');
    this.state = this.animalTypes[0];
  }
}
