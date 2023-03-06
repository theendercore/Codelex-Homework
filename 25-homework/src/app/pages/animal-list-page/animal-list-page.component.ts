import { Component } from '@angular/core';
import { Animal, AnimalConstruct } from 'src/app/models/Animal';
import { AnimalApiService } from 'src/app/services/animal-api.service';

@Component({
  selector: 'app-animal-list-page',
  templateUrl: './animal-list-page.component.html',
})
export class AnimalListPageComponent {
 animals: Animal[] = [];
  constructor(private animalAPI: AnimalApiService) {}

  ngOnInit(): void {
    this.refetchAnimals();
  }

  removeAnimal(id: string | number) {
    this.animalAPI.deleteOne(id).subscribe({
      next: (data) => {
        this.animals = this.animals.filter((a) => a.id !== id);
      },
      error: (e) => console.error(e),
    });
  }

  addAnimal(animal: AnimalConstruct) {
    this.animalAPI.addOne(animal).subscribe({
      next: (data) => {
        this.animals.push(data);
      },
      error: (e) => console.error(e),
    });
  }

  refetchAnimals() {
    this.animalAPI.getAll().subscribe({
      next: (data) => {
        this.animals = data;
      },
      error: (e) => console.error(e),
    });
  }
}
