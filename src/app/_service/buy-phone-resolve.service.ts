import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Phone } from '../_model/phone.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PhoneServiceService } from './phone-service.service';
import { ImagesProcessingService } from './images-processing.service';

@Injectable({
  providedIn: 'root',
})
export class BuyPhoneResolveService implements Resolve<Phone[]> {
  constructor(
    private phoneService: PhoneServiceService,
    private imageProcessingService: ImagesProcessingService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Phone[]> | Promise<Phone[]> {
    const id = route.paramMap.get('id');
    const isSingleProductCheckOut = route.paramMap.get('isSinglePhoneCheckOut');

    // Type guard to ensure phones is a Phone[] before using map
    return this.phoneService
      .getPhoneDetails(isSingleProductCheckOut, id)
      .pipe(map((phone) => this.imageProcessingService.createImages(phone)));
  }
}
