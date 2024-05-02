import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { requestAPI, trailerAPI } from '../consts/consts';
import { Video } from '../interfaces/videoInter';

@Injectable({
  providedIn: 'root'
})
export class TrailerFetchService {
  private readonly request = inject(HttpClient);

  readonly apiURL = trailerAPI


  getTrailer(movieId: string){
    return this.request.get<Video>(`${this.apiURL}3/movie/${movieId}?api_key=63576f72dbd94aa00662aa9a8d9617da&append_to_response=videos`)
  }
}
  