import { TestBed } from '@angular/core/testing';

import { PhoneServiceService } from './phone-service.service';

describe('PhoneServiceService', () => {
  let service: PhoneServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhoneServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
