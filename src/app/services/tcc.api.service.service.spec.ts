import { TestBed } from '@angular/core/testing';

import { TccApiServiceService } from './tcc.api.service.service';

describe('TccApiServiceService', () => {
  let service: TccApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TccApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
