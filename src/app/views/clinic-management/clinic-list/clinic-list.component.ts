import { Component, OnInit } from '@angular/core';
import { Clinic } from '../clinic';
import { ClinicService } from '../clinic.service';

@Component({
  selector: 'app-clinic-list',
  templateUrl: './clinic-list.component.html',
  styleUrls: ['./clinic-list.component.scss']
})
export class ClinicListComponent implements OnInit {
  clinics: Clinic[] = [];
  showAddModal = false;
  editingClinic: Clinic | null = null;

  constructor(private clinicService: ClinicService) {}

  ngOnInit(): void {
    this.loadClinics();
  }

  loadClinics(): void {
    this.clinicService.getClinics().subscribe({
      next: (data: Clinic[]) => this.clinics = data,
      error: err => console.error('Error loading clinics', err)
    });
  }

  openAddModal(): void {
    this.editingClinic = null;
    this.showAddModal = true;
  }

  modifyClinic(clinic: Clinic): void {
    this.editingClinic = { ...clinic };
    this.showAddModal = true;
  }

  deleteClinic(clinic: Clinic): void {
    if (confirm(`Are you sure to delete ${clinic.name}?`)) {
      this.clinicService.deleteClinic(clinic.id!).subscribe(() => {
        this.clinics = this.clinics.filter(c => c.id !== clinic.id);
      });
    }
  }

  onClinicSaved(saved: Clinic): void {
    const index = this.clinics.findIndex(c => c.id === saved.id);
    if (index !== -1) {
      this.clinics[index] = saved;
    } else {
      this.clinics.push(saved);
    }
    this.showAddModal = false;
  }

  closeAddModal(): void {
    this.showAddModal = false;
  }
}
