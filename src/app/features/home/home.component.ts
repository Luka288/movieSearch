import { Component, InjectionToken, OnInit, inject} from '@angular/core';
import { FetchMovieService } from '../shared/services/fetch-movie.service';
import { CommonModule } from '@angular/common';
import { Ratings, movie } from '../shared/interfaces/movieInter';
import { SweetalertService } from '../shared/services/sweet-alerts.service';
import { TrailerFetchService } from '../shared/services/trailer-fetch.service';
import { Video } from '../shared/interfaces/videoInter';
import { URL } from '../shared/consts/consts';
import { YoutubeFetchService } from '../shared/services/youtube-fetch.service';
import { VideoSearchListResponse } from '../shared/interfaces/tmdbInterface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export default class HomeComponent{
  private readonly httpRequest = inject(FetchMovieService)
  private readonly trailerRequest = inject(TrailerFetchService)
  private readonly sweetAlerts = inject(SweetalertService)
  private readonly videoService = inject(YoutubeFetchService)
  private readonly sanitizer = inject(DomSanitizer)

  readonly pervSearched: movie[] = [];

  movie: movie | null = null;
  videos: Video | null = null
  youtube: VideoSearchListResponse | null = null
  videoUrl: SafeResourceUrl |  null = null;

  readonly link = URL

  loadMovie(movieId: string) {
    this.httpRequest.getMovie(movieId).subscribe((resp) => {
      this.pervSearched.push(resp)
      if (resp?.Response == "False") {
        this.sweetAlerts.toast("Check input", "error", "red")
      }
      this.movie = resp
      this.videoUrl = null
      this.loadTrailer(resp.imdbID)
      console.log(resp)
    });

  }

  loadTrailer(movieId: string){
    this.trailerRequest.getTrailer(movieId).subscribe((resp) => {
      this.videos = resp
      this.loadVideo(resp.videos.results[0].key)
      console.log(this.loadVideo)
      console.log(resp)
    })
  }

  loadVideo(id: string){
    this.videoService.getVideo(id).subscribe((resp) => {
      const videoId = resp?.items?.[0]?.id?.videoId;
      if (videoId) {
        const videoUrl = `https://www.youtube.com/embed/${videoId}`;
        this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(videoUrl);
      }
    });
  }
}
