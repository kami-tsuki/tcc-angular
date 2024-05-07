import { TestBed } from '@angular/core/testing';

import { TomtomApiServiceService } from './tomtom.api.service.service';

describe('TomtomApiServiceService', () => {
  let service: TomtomApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TomtomApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
