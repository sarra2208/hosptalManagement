import { Component, OnInit } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointementService } from '../appointement.service';

@Component({
  selector: 'app-appointement-list',
  templateUrl: './appointement-list.component.html',
  styleUrls: ['./appointement-list.component.scss']
})
export class AppointementListComponent implements OnInit {
  appointments: Appointment[] = [];
  role: any = '';
  editingAppointment: Appointment | null = null;
  showModal = false;

  constructor(private appointmentService: AppointementService ) {}

  ngOnInit(): void {
    this.loadAppointments();
    this.role = localStorage.getItem("role");
  }

loadAppointments(): void {
  this.appointmentService.getAll().subscribe({
    next: (data: Appointment[]) => (this.appointments = data),
    error: (err: any) => console.error('Error loading appointments', err),
  });
}

  openAddModal(): void {
    this.editingAppointment = null;
    this.showModal = true;
  }

  editAppointment(app: Appointment): void {
    this.editingAppointment = { ...app };
    this.showModal = true;
  }

  deleteAppointment(app: Appointment): void {
    if (confirm(`Delete appointment on "${app.date} at ${app.heure}"?`)) {
      this.appointmentService.delete(app.id!).subscribe(() => {
        this.appointments = this.appointments.filter(a => a.id !== app.id);
      });
    }
  }

  onSaved(saved: Appointment): void {
    const index = this.appointments.findIndex(a => a.id === saved.id);
    if (index !== -1) {
      this.appointments[index] = saved;
    } else {
      this.appointments.push(saved);
    }
    this.showModal = false;
  }

  onClose(): void {
    this.showModal = false;
  }
}
