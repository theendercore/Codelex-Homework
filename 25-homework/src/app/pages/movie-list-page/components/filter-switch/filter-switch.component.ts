import { Component, EventEmitter, Output } from '@angular/core';
import { StatusType, StatusTypeList } from 'src/app/models/Movies';

@Component({
  selector: 'app-filter-switch',
  templateUrl: './filter-switch.component.html',
})
export class FilterSwitchComponent {
  private statusTypes: Array<StatusType | 'All'> = ['All', ...StatusTypeList];
  state: StatusType | 'All' = 'All';
  @Output() updateSwitch = new EventEmitter<void>();

  // constructor(private restAPI: RestApiService) {}

  onClick() {
    this.statusTypes.push(this.statusTypes.shift() || 'All');
    this.state = this.statusTypes[0];
    // this.restAPI.setFilter(this.state === 'All' ? null : this.state);
    this.updateSwitch.emit();
  }
}
