import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneViewDetailsComponent } from './phone-view-details.component';

describe('PhoneViewDetailsComponent', () => {
  let component: PhoneViewDetailsComponent;
  let fixture: ComponentFixture<PhoneViewDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhoneViewDetailsComponent]
    });
    fixture = TestBed.createComponent(PhoneViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
