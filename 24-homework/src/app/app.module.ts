import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalFormComponent } from './compnents/animal-form/animal-form.component';
import { FilterSwitchComponent } from './compnents/filter-switch/filter-switch.component';
import { AnimalListComponent } from './compnents/animal-list/animal-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalFormComponent,
    FilterSwitchComponent,
    AnimalListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
