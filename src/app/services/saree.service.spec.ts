import { TestBed } from '@angular/core/testing';

import { SareeService } from './saree.service';

describe('SareeService', () => {
  let service: SareeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SareeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
