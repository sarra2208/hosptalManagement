import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClinicService } from '../clinic.service';
import { Clinic } from '../clinic';

@Component({
  selector: 'app-add-clinic',
  templateUrl: './add-clinic.component.html',
  styleUrls: ['./add-clinic.component.scss']
})
export class AddClinicComponent implements OnInit {
  @Input() clinic: Clinic | null = null;
  @Output() clinicSaved = new EventEmitter<Clinic>();
  @Output() close = new EventEmitter<void>();

  clinicForm: FormGroup;

  constructor(private fb: FormBuilder, private clinicService: ClinicService) {
    this.clinicForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  ngOnInit(): void {
    if (this.clinic) {
      this.clinicForm.patchValue(this.clinic);
    }
  }

  submit(): void {
    if (this.clinicForm.valid) {
      const payload: Clinic = {
        ...this.clinicForm.value,
        id: this.clinic?.id
      };

      const request$ = payload.id
        ? this.clinicService.updateClinic(payload.id,payload)
        : this.clinicService.createClinic(payload);

      request$.subscribe({
        next: (res) => {
          this.clinicSaved.emit(res);
          this.close.emit();
        },
        error: err => console.error('Error saving clinic', err)
      });
    }
  }

  cancel(): void {
    this.close.emit();
  }
}
