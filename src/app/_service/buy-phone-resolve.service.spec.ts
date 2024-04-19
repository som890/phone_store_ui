import { TestBed } from '@angular/core/testing';

import { BuyPhoneResolveService } from './buy-phone-resolve.service';

describe('BuyPhoneResolveService', () => {
  let service: BuyPhoneResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuyPhoneResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
