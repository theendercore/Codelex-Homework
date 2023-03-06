import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstructedMovie, Movie, StatusType } from 'src/app/models/Movies';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  constructor(private httpClient: HttpClient) {}
  baseUrl = 'http://localhost:3000/movies';

  getAll(filter: StatusType | "All") {
    let x = '';
    if (filter !== "All") x = `?status=${filter}`;
    return this.httpClient.get<Movie[]>(`${this.baseUrl}${x}`);
  }

  addOne(movie: ConstructedMovie) {
    return this.httpClient.post<Movie>(this.baseUrl, movie);
  }

  deleteOne(id: number | string) {
    console.log(id)
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`);
  }
}
