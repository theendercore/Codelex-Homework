import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AnimalType, AnimalTypeList } from '../../models/Animal';

@Component({
  selector: 'app-filter-switch',
  templateUrl: './filter-switch.component.html',
})
export class FilterSwitchComponent {
  private animalTypes: Array<AnimalType | 'All'> = ['All', ...AnimalTypeList];
  state: AnimalType | 'All' = "All";
    @Output() updateSwitch = new EventEmitter<AnimalType | 'All'>();

  constructor(private restAPI: RestApiService) {}

  onClick() {
    this.animalTypes.push(this.animalTypes.shift() || 'All');
    this.state = this.animalTypes[0];
    this.updateSwitch.emit( this.state);
  }
}
