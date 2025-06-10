import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointementListComponent } from './appointement-list.component';

describe('AppointementListComponent', () => {
  let component: AppointementListComponent;
  let fixture: ComponentFixture<AppointementListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointementListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
