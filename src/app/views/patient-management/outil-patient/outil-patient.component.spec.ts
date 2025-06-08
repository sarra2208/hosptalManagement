import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutilPatientComponent } from './outil-patient.component';

describe('OutilPatientComponent', () => {
  let component: OutilPatientComponent;
  let fixture: ComponentFixture<OutilPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutilPatientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutilPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
