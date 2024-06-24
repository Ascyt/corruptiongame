import { TestBed } from '@angular/core/testing';

import { CorruptionTextService } from './corruption-text.service';

describe('CorruptionTextService', () => {
  let service: CorruptionTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorruptionTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
