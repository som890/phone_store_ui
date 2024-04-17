import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPhoneDetailsComponent } from './show-phone-details.component';

describe('ShowPhoneDetailsComponent', () => {
  let component: ShowPhoneDetailsComponent;
  let fixture: ComponentFixture<ShowPhoneDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPhoneDetailsComponent]
    });
    fixture = TestBed.createComponent(ShowPhoneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
