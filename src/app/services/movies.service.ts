import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(public _HttpClient:HttpClient){}


  getTrendingMovies():Observable<any>{
    return this._HttpClient.get("https://api.themoviedb.org/3/movie/top_rated?api_key=45e8b4cb71a229308cf3c2c15f98646e");
  }
  
}
