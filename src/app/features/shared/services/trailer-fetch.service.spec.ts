import { TestBed } from '@angular/core/testing';

import { TrailerFetchService } from './trailer-fetch.service';

describe('TrailerFetchService', () => {
  let service: TrailerFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrailerFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
