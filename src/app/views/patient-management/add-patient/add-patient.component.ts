import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
  @Input() patient: any = null;
  @Output() patientSaved = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();

  patientForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private patientService: PatientService
  ) {
    this.patientForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      birthdate: ['', Validators.required],
      gender: ['MALE', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit() {
    if (this.patient) {
      this.patientForm.patchValue({
        ...this.patient,
        birthdate: this.formatDate(this.patient.birthdate),
      });
    }
  }

  private formatDate(date: string): string {
    const d = new Date(date);
    return d.toISOString().substring(0, 10);
  }

  submit() {
    if (this.patientForm.valid) {
      const formValue = this.patientForm.value;

      const payload = {
        ...formValue,
        id: this.patient?.id || null,
      };

      const saveObservable = this.patient?.id
        ? this.patientService.addPatient(payload)
        : this.patientService.addPatient(payload);

      saveObservable.subscribe({
        next: (res) => {
          this.patientSaved.emit(res);
          this.close.emit();
        },
        error: (err) => {
          console.error('Failed to save patient', err);
        },
      });
    }
  }

  cancel() {
    this.close.emit();
  }
}
