import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../../services/patient.service';

import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Patient } from '../patient';
import { AppointementService } from '../../appointement-management/appointement.service';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent implements OnInit {
  showAddModal = false;
  editingPatient: Patient | null = null;
  selectedPatient: Patient | null = null;
  activeActionIndex: number | null = null;
  role : any = '';
  patients: Patient[] = [];

  currentPage = 1;
  pageSize = 5;

  constructor(private patientService: PatientService,private appointementService :AppointementService ) {}

  ngOnInit() {
    this.loadPatients();
    this.role = localStorage.getItem("role");
  }
sendReminderEmail(patient: any) {
  // Assuming patient object has an 'id' or similar to get appointments
  this.appointementService.getNextAppointment(patient.id).subscribe(appointment => {
    if (appointment) {
      // Call service to send email reminder
      this.appointementService.sendReminderEmail(patient.email, appointment).subscribe({
        next: () => {
          alert('Reminder email sent successfully!');
        },
        error: () => {
          alert('Failed to send reminder email.');
        }
      });
    } else {
      alert('No upcoming appointment found for this patient.');
    }
  }, err => {
    alert('Error fetching appointment info.');
  });
}
  loadPatients() {
    this.patientService.getPatients().subscribe({
      next: (data: Patient[]) => {
        this.patients = data;
      },
      error: (err) => {
        console.error('Error loading patients', err);
      }
    });
  }

  get totalPages() {
    return Math.ceil(this.patients.length / this.pageSize);
  }

  get totalPagesArray() {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }

  toggleActions(index: number) {
    this.activeActionIndex = this.activeActionIndex === index ? null : index;
  }

  get paginatedPatients() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.patients.slice(start, start + this.pageSize);
  }

  goToPage(page: number) {
    if (page > 0 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  openAddModal() {
    this.editingPatient = null; // clear edit state for adding
    this.showAddModal = true;
  }

  onPatientSaved(data: Patient) {
    if (data.id) {
      // Modify existing patient
      const index = this.patients.findIndex(p => p.id === data.id);
      if (index !== -1) {
        this.patients[index] = data;
      }
    } else {
      // Add new patient - assume backend returns created patient with id
      this.patients.push(data);
    }
    this.closeAddModal();
  }

  closeAddModal() {
    this.showAddModal = false;
  }

  modifyPatient(patient: Patient) {
    this.editingPatient = { ...patient };
    this.showAddModal = true;
  }

  deletePatient(patient: Patient) {
    if (confirm(`Delete ${patient.firstname} ${patient.lastname}?`)) {
      this.patientService.deletePatient(patient.id!).subscribe(() => {
        this.patients = this.patients.filter(p => p.id !== patient.id);
      });
    }
  }

  downloadFile(patient: Patient) {
    this.selectedPatient = patient;

    setTimeout(() => {
      const element = document.getElementById('pdf-content');
      if (!element) {
        console.error('Element not found');
        return;
      }

      html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: true
      }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');

        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 10, pdfWidth, pdfHeight);
        pdf.save(`${patient.firstname}_${patient.lastname}_Info.pdf`);
      }).catch(error => {
        console.error('Canvas rendering failed', error);
      });
    }, 200);
  }
}
