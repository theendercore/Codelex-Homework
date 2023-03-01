import { Component } from '@angular/core';
import { Service } from 'src/app/models/Service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  sum = 0;
  services: Service[] = [
    {
      name: 'Web Development',
      cost: 300,
      selected: false,
    },
    {
      name: 'Design',
      cost: 400,
      selected: false,
    },
    {
      name: 'Integration',
      cost: 250,
      selected: false,
    },
    {
      name: 'Training',
      cost: 220,
      selected: false,
    },
  ];

  toggleSelected(id: number) {
    this.services.map((v, i) => {
      if (i === id) {
        if (v.selected) {
          this.sum -= v.cost;
        } else {
          this.sum += v.cost;
        }
        v.selected = !v.selected;
      }
      return v;
    });
  }
}
