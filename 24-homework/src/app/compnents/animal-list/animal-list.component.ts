import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { Animal, AnimalTypeList } from '../../models/Animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
})
export class AnimalListComponent implements OnInit {
  constructor(private restAPI: RestApiService) {}

  animalList: Animal[] = [];

  ngOnInit(): void {
    this.restAPI.getAll(null).subscribe({
      next: (data) => {
        this.animalList = data;
        // console.log("update state");
      },
      error: (e) => console.error(e),
    });
  }
  onClick(id: string | number) {
    this.restAPI.deleteOne(id).subscribe({
      next: (data) => {
        this.animalList = this.animalList.filter((a) => a.id !== id);
      },
      error: (e) => console.error(e),
    });
  }
}
