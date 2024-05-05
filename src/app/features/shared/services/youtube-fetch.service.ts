import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { key, youtubeDisplay } from '../consts/consts';
import { VideoSearchListResponse } from '../interfaces/tmdbInterface';


@Injectable({
  providedIn: 'root'
})
export class YoutubeFetchService {
  private readonly http = inject(HttpClient)


  readonly youtubeAPI = youtubeDisplay;
  readonly key = key;

  getVideo(id: string){
    return this.http.get<VideoSearchListResponse>(`${this.youtubeAPI}/search?key=${key}&q=${id}&type=video&maxResults=10`)
  }
}
