import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddnewphoneComponent } from './addnewphone.component';

describe('AddnewphoneComponent', () => {
  let component: AddnewphoneComponent;
  let fixture: ComponentFixture<AddnewphoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddnewphoneComponent]
    });
    fixture = TestBed.createComponent(AddnewphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
