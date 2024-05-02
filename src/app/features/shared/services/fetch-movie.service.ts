import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { movie } from '../interfaces/movieInter';
import { requestAPI } from '../consts/consts';

@Injectable({
  providedIn: 'root'
})
export class FetchMovieService {
  private readonly request = inject(HttpClient)

  readonly apiURL = requestAPI

  getMovie(movie: string){
    return this.request.get<movie>(`${this.apiURL}?t=${movie}&apikey=b38dd0c0`)
  }
}
