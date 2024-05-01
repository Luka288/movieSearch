import { TestBed } from '@angular/core/testing';

import { FetchMovieService } from './fetch-movie.service';

describe('FetchMovieService', () => {
  let service: FetchMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
