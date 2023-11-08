import { Component } from '@angular/core';
import {MoviesService} from "src/app/services/movies.service"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies :any =[];
  constructor(private _MoviesService:MoviesService){
    this._MoviesService.getTrendingMovies().subscribe( (data) => {
      console.log(data);
      this.movies = data.results;
    });
  }
}
