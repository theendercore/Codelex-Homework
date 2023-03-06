import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animal, AnimalConstruct, AnimalType } from '../models/Animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalApiService {
  constructor(private httpClient: HttpClient) {}
  baseUrl = 'http://localhost:3000/animals';

  getAll(filter: AnimalType | "All") {
    let x = filter !== "All" ? `?type=${filter}` : '';
    return this.httpClient.get<Animal[]>(`${this.baseUrl}${x}`);
  }

  addOne(animal: AnimalConstruct) {
    return this.httpClient.post<Animal>(this.baseUrl, animal);
  }

  deleteOne(id: number | string) {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
