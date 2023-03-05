import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AnimalTypeList } from 'src/app/models/Animal';
import { RestApiService } from 'src/app/services/rest-api.service';
import { AnimalConstruct } from '../../models/Animal';

@Component({
  selector: 'app-animal-form',
  templateUrl: './animal-form.component.html',
})
export class AnimalFormComponent {
  constructor(private restAPI: RestApiService) {}

  typeList = [...AnimalTypeList];
  animal = new AnimalConstruct('', null);

  onSubmit(form: FormGroup) {
    this.restAPI.addOne(form.value).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (e) => console.error(e),
    });
    form.reset();
  }
}
