import { Component } from '@angular/core';
import { Service } from 'src/app/models/Service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  total = 0;
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

  totalCalculator(service: Service) {
    this.total += service.cost * (service.selected ? -1 : 1);
  }

  selectHandler(index: number) {
    let v = this.services[index];
    this.totalCalculator(v);
    v.selected = !v.selected;
  }
}
