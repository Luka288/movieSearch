import { Component, InjectionToken, OnInit, inject} from '@angular/core';
import { FetchMovieService } from '../shared/services/fetch-movie.service';
import { CommonModule } from '@angular/common';
import { consumerMarkDirty } from '@angular/core/primitives/signals';
import { Ratings, movie } from '../shared/interfaces/movieInter';
import { SweetalertService } from '../shared/services/sweet-alerts.service';
import { TrailerFetchService } from '../shared/services/trailer-fetch.service';
import { Video } from '../shared/interfaces/videoInter';
import { URL } from '../shared/consts/consts';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent{
  private readonly httpRequest = inject(FetchMovieService)
  private readonly trailerRequest = inject(TrailerFetchService)
  private readonly sweetAlerts = inject(SweetalertService)

  readonly pervSearched: movie[] = [];

  movie: movie | null = null;
  videos: Video | null = null

  readonly link = URL

  loadMovie(movieId: string) {
    this.httpRequest.getMovie(movieId).subscribe((resp) => {
      this.pervSearched.push(resp)
      if (resp?.Response == "False") {
        this.sweetAlerts.toast("Empty input", "error", "red")
      }
      // console.log(...this.pervSearched)
      this.movie = resp
      this.loadTrailer(resp.imdbID)
      console.log(resp)
    });

  }

  loadTrailer(movieId: string){
    this.trailerRequest.getTrailer(movieId).subscribe((resp) => {
      this.videos = resp
      console.log(resp)
    })
  }


  updateURL(){
    
  }
}
