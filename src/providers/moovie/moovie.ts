import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(page = 1) {
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=` +  this.getApiKey());
  }

  getMovieDetails(filmeId) {    
    return this.http.get(this.baseApiPath + `/movie/${filmeId}?api_key=` +  this.getApiKey());
  }

  getApiKey(): string {
    return "d36675b4ccb6f615b224e61d3bc8da51";
  }

}
