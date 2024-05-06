import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { Phone } from '../_model/phone.model';
import { map, switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
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

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Phone[] | Observable<Phone[]> | Promise<Phone[]> {
    const id = route.paramMap.get("id");
    const isSingleProductCheckOut  = route.paramMap.get("isSinglePhoneCheckOut");
    return this.phoneService.getPhoneDetails(isSingleProductCheckOut, id)
    .pipe(
      map(
        (x: any, i) => x.map((phone: Phone) => this.imageProcessingService.createImages(phone))
      )
    );
  }
}
