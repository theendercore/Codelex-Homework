import { Component } from '@angular/core';
import { StatusType, StatusTypeList } from 'src/app/models/Movies';

@Component({
  selector: 'app-movie-filter-switch',
  templateUrl: './movie-filter-switch.component.html',
})
export class MovieFilterSwitchComponent {
  private statusTypes: Array<StatusType | 'All'> = ['All', ...StatusTypeList];
  state: StatusType | 'All' = 'All';
  // @Output() updateSwitch = new EventEmitter<void>();

  // constructor(private restAPI: RestApiService) {}

  onClick() {
    this.statusTypes.push(this.statusTypes.shift() || 'All');
    this.state = this.statusTypes[0];
    // this.restAPI.setFilter(this.state === 'All' ? null : this.state);
    // this.updateSwitch.emit();
  }
}
