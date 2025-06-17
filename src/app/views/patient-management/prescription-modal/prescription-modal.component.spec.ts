import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionModalComponent } from './prescription-modal.component';

describe('PrescriptionModalComponent', () => {
  let component: PrescriptionModalComponent;
  let fixture: ComponentFixture<PrescriptionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrescriptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
