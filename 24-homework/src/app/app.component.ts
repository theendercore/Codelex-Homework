import { Component } from '@angular/core';
import { Animal, AnimalConstruct, AnimalType } from './models/Animal';
import { RestApiService } from './services/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  animals: Animal[] = [];
  constructor(private restAPI: RestApiService) {}

  ngOnInit(): void {
    this.restAPI.getAll().subscribe({
      next: (data) => {
        this.animals = data;
      },
      error: (e) => console.error(e),
    });
  }

  removeAnimal(id: string | number) {
    this.restAPI.deleteOne(id).subscribe({
      next: (data) => {
        this.animals = this.animals.filter((a) => a.id !== id);
      },
      error: (e) => console.error(e),
    });
  }

  addAnimal(animal: AnimalConstruct) {
    this.restAPI.addOne(animal).subscribe({
      next: (data) => {
        this.animals.push(data);
      },
      error: (e) => console.error(e),
    });
  }

  refetchAnimals() {
    this.restAPI.getAll().subscribe({
      next: (data) => {
        this.animals = data;
      },
      error: (e) => console.error(e),
    });
  }
}
