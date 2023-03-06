import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalFormComponent } from './compnents/animal-form/animal-form.component';
import { FilterSwitchComponent } from './compnents/filter-switch/filter-switch.component';
import { AnimalListComponent } from './compnents/animal-list/animal-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnimalFormComponent,
    FilterSwitchComponent,
    AnimalListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
