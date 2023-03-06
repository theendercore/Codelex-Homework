import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Movie, StatusType, StatusTypeList } from 'src/app/models/Movies';
import { load } from 'src/app/store/movies.actions';

@Component({
  selector: 'app-movie-filter-switch',
  templateUrl: './movie-filter-switch.component.html',
})
export class MovieFilterSwitchComponent {
  private statusTypes: Array<StatusType | 'All'> = ['All', ...StatusTypeList];
  status: StatusType | 'All' = 'All';

  constructor(private store: Store<{ movies: Movie[] }>) {}

  onClick() {
    this.statusTypes.push(this.statusTypes.shift() || 'All');
    this.status = this.statusTypes[0];
    this.store.dispatch(load({ filter: this.status }));
  }
}
