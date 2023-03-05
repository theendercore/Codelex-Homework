import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AnimalTypeList } from '../../models/Animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
})
export class AnimalListComponent implements OnInit {
  constructor(private restAPI: RestApiService) {}

  ngOnInit(): void {
    this.restAPI.getAll(AnimalTypeList[0]).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
