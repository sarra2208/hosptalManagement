import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  doctors = ['Dr. Smith', 'Dr. Adams', 'Dr. Brown'];

  constructor(private fb: FormBuilder) {
    this.patientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [null, [Validators.required, Validators.min(0)]],
      assignedDoctor: [null, Validators.required],
      lastAppointment: ['', Validators.required]
    });
  }

  ngOnInit() {
    if (this.patient) {
      this.patientForm.patchValue({
        ...this.patient,
        lastAppointment: this.formatDate(this.patient.lastAppointment)
      });
    }
  }

  private formatDate(date: any): string {
    const d = new Date(date);
    return d.toISOString().substring(0, 10);
  }

  submit() {
    if (this.patientForm.valid) {
      const formValue = {
        ...this.patientForm.value,
        id: this.patient?.id || null
      };
      this.patientSaved.emit(formValue);
      this.close.emit();
    }
  }

  cancel() {
    this.close.emit();
  }
}
