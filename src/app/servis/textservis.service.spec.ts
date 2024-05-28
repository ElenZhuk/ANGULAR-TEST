import { TestBed } from '@angular/core/testing';

import { TextservisService } from './textservis.service';

describe('TextservisService', () => {
  let service: TextservisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextservisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
