import { TestBed } from '@angular/core/testing';

import { PhoneResolveService } from './phone-resolve.service';

describe('PhoneResolveService', () => {
  let service: PhoneResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
