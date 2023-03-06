import { Component} from '@angular/core';
import { Movie } from 'src/app/models/Movies';
import { StatusTypeList } from '../../../../models/Movies';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
})
export class MovieListComponent {
  movieList: Movie[] = [];

  constructor() {
    this.movieList = [
      {
        id: 1,
        name: 'Star Wars',
        status: StatusTypeList[0],
        img: 'https://picsum.photos/200',
        rating: 1,
      },{
        id: 2,
        name: 'Star Wars 2',
        status: StatusTypeList[0],
        img: 'https://picsum.photos/200',
        rating: 4,
      },{
        id: 3,
        name: 'Star Wars 3',
        status: StatusTypeList[1],
        img: 'https://picsum.photos/200',
        rating: null,
      }
    ];
  }

  // @Output() removeAnimal = new EventEmitter<string>();

  deleteMovie(id: string | number) {
    //     this.removeAnimal.emit(id)
  }
}
