import { TestBed } from '@angular/core/testing';

import { WorldsService } from './worlds.service';

describe('WorldsService', () => {
  let service: WorldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
