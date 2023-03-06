import { Component } from '@angular/core';
import { Animal, AnimalConstruct } from 'src/app/models/Animal';
import { RestApiService } from 'src/app/services/rest-api.service';

@Component({
  selector: 'app-animal-list-page',
  templateUrl: './animal-list-page.component.html',
})
export class AnimalListPageComponent {
 animals: Animal[] = [];
  constructor(private restAPI: RestApiService) {}

  ngOnInit(): void {
    this.refetchAnimals();
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
