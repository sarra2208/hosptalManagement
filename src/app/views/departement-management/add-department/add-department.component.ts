import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DepartmentService } from '../department.service';
import { Department } from '../departement';
import { Clinic } from '../../clinic-management/clinic';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  @Input() department: Department | null = null;
  @Output() departmentSaved = new EventEmitter<Department>();
  @Output() close = new EventEmitter<void>();

  departmentForm: FormGroup;
  clinics: Clinic[] = [];

  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService
  ) {
    this.departmentForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      clinicId: [null, Validators.required],
    });
  }

  ngOnInit(): void {
    this.departmentService.getClinics().subscribe({
      next: (data) => this.clinics = data,
      error: (err) => console.error('Failed to load clinics', err)
    });

    if (this.department) {
      this.departmentForm.patchValue(this.department);
    }
  }

  submit(): void {
  if (this.departmentForm.valid) {
    const formValue = this.departmentForm.value;

    const payload: Department = {
      id: this.department?.id,
      name: formValue.name,
      description: formValue.description,
      clinic: {
        id: formValue.clinicId,
        name: '',
        address: '',
        phone: '',
        email: ''
      }
    };

    const req$ = payload.id
      ? this.departmentService.update(payload)
      : this.departmentService.create(payload);

    req$.subscribe({
      next: (res) => {
        this.departmentSaved.emit(res);
        this.close.emit();
      },
      error: (err) => console.error('Save failed', err)
    });
  }
}

  cancel(): void {
    this.close.emit();
  }
}
