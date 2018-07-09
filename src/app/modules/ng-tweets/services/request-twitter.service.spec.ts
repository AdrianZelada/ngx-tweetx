import { TestBed, inject } from '@angular/core/testing';

import { RequestTwitterService } from './request-twitter.service';

describe('RequestTwitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestTwitterService]
    });
  });

  it('should be created', inject([RequestTwitterService], (service: RequestTwitterService) => {
    expect(service).toBeTruthy();
  }));
});
