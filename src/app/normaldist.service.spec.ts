import { TestBed } from '@angular/core/testing';

import { NormaldistService } from './normaldist.service';

describe('NormaldistService', () => {
  let service: NormaldistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NormaldistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
