import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstructedMovie, Movie, StatusType } from 'src/app/models/Movies';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private httpClient: HttpClient) {}
  baseUrl = 'http://localhost:3000/movies';
  private filter: StatusType | null = null;

  getAll() {
    let x = '';
    if (this.filter !== null) x = `?type=${this.filter}`;
    return this.httpClient.get<Movie[]>(`${this.baseUrl}${x}`);
  }

  addOne(movie: ConstructedMovie) {
    return this.httpClient.post<Movie>(this.baseUrl, movie);
  }

  deleteOne(id: number | string) {
    return this.httpClient.delete<Movie>(`${this.baseUrl}/${id}`);
  }
  setFilter(value: StatusType | null) {
    this.filter = value;
  }
}
