import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPhoneImageDialogComponent } from './show-phone-image-dialog.component';

describe('ShowPhoneImageDialogComponent', () => {
  let component: ShowPhoneImageDialogComponent;
  let fixture: ComponentFixture<ShowPhoneImageDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPhoneImageDialogComponent]
    });
    fixture = TestBed.createComponent(ShowPhoneImageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
