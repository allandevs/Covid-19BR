import { TestBed } from '@angular/core/testing';

import { Covid19BrasilService } from './covid19-brasil.service';

describe('Covid19BrasilService', () => {
  let service: Covid19BrasilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19BrasilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
