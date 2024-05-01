import { Component, inject} from '@angular/core';
import { FetchMovieService } from '../shared/services/fetch-movie.service';
import { CommonModule } from '@angular/common';
import { consumerMarkDirty } from '@angular/core/primitives/signals';
import { movie } from '../shared/interfaces/movieInter';
import { SweetalertService } from '../shared/services/sweet-alerts.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  private readonly httpRequest = inject(FetchMovieService)
  private readonly sweetAlerts = inject(SweetalertService)

  readonly pervSearched: movie[] = [];

  movie: movie | null = null;


  loadMovie(movieId: string) {
    this.httpRequest.getMovie(movieId).subscribe((resp) => {
      this.pervSearched.push(resp)
      if (resp?.Response == "False") {
        this.sweetAlerts.toast("Empty input", "error", "red")
      }
      console.log(...this.pervSearched)
      this.movie = resp
      console.log(resp)
    });
  }
}
