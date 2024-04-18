import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Phone } from '../_model/phone.model';
import { Observable, of } from 'rxjs';
import { PhoneServiceService } from './phone-service.service';
import { ImagesProcessingService } from './images-processing.service';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PhoneResolveService implements Resolve<Phone>{

  constructor(private phoneService: PhoneServiceService,
      private imagesProcessingservice: ImagesProcessingService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Phone | Observable<Phone> | Promise<Phone> {
    const id = route.paramMap.get("phoneId");

    if (id) {
      // Convert id to a number before calling the service
      const phoneId = Number(id);
  
      // Check if the conversion was successful
      if (!isNaN(phoneId)) {
        // We have to fetch details from the backend
        return this.phoneService.getPhoneDetailsById(phoneId).pipe(
          map(p => this.imagesProcessingservice.createImages(p))
        );
      }
    }
  
    // Return an empty product observable if there's no valid id
    return of(this.getPhoneDetails());
  }

  getPhoneDetails() {
    return {
      phoneId: 0,
      phoneName: "",
      phoneDescription: '',
      phoneDiscountedPrice: 0,
      phoneActualPrice: 0,
      phoneImageSet: []
    }
  }
}
