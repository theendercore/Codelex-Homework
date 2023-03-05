import { Component, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  @ViewChild('formName') formN!: NgForm;

  onSubmit() {
    console.log(this.formN.form.valid);
  }
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');

  newHero() {
    this.onSubmit();
    this.model = new Hero(this.model.id + 1, '', '');
  }
}
