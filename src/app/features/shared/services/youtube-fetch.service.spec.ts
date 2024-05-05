import { TestBed } from '@angular/core/testing';

import { YoutubeFetchService } from './youtube-fetch.service';

describe('YoutubeFetchService', () => {
  let service: YoutubeFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YoutubeFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
