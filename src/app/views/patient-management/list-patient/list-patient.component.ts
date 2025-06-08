import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-list-patient',
  templateUrl: './list-patient.component.html',
  styleUrls: ['./list-patient.component.scss']
})
export class ListPatientComponent {
  showAddModal = false;
 editingPatient: any = null;
 selectedPatient: any = null;
  patients = [
    { id:1,firstName: 'John', lastName: 'Doe', age: 45, assignedDoctor: 'Dr. Smith', lastAppointment: new Date('2024-12-01') },
    { id:2,firstName: 'Jane', lastName: 'Doe', age: 38, assignedDoctor: 'Dr. Adams', lastAppointment: new Date('2024-11-21') }
  ];

  currentPage = 1;
  pageSize = 5;

  get totalPages() {
    return Math.ceil(this.patients.length / this.pageSize);
  }

  get totalPagesArray() {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
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
    this.showAddModal = true;
  }

  

  onPatientAdded(newPatient: any) {
    newPatient.lastAppointment = new Date(newPatient.lastAppointment);
    this.patients.push(newPatient);
    this.goToPage(this.totalPages); // Go to last page
  }

  deletePatient(patient: any) {
    if (confirm(`Delete ${patient.firstName} ${patient.lastName}?`)) {
      this.patients = this.patients.filter(p => p !== patient);
    }
  }



  downloadFile(patient: any) {
  this.selectedPatient = patient;

  // Wait for the view to update
  setTimeout(() => {
    const element = document.getElementById('pdf-content');
    if (!element) {
      console.error('Element not found');
      return;
    }

    html2canvas(element, {
      scale: 2,
      useCORS: true, // if you're loading images or fonts externally
      logging: true
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 10, pdfWidth, pdfHeight);
      pdf.save(`${patient.firstName}_${patient.lastName}_Info.pdf`);
    }).catch((error) => {
      console.error('Canvas rendering failed', error);
    });
  }, 200); // give Angular time to render
}
  

  openEditModal(patient: any) {
    this.editingPatient = { ...patient }; // clone to avoid live editing
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
  }

  onPatientSaved(data: any) {
    if (data.id) {
      // Modify existing
      const index = this.patients.findIndex(p => p.id === data.id);
      if (index !== -1) {
        this.patients[index] = { ...data, lastAppointment: new Date(data.lastAppointment) };
      }
    } else {
      // Add new
      const newId = Math.max(...this.patients.map(p => p.id || 0), 0) + 1;
      this.patients.push({ ...data, id: newId, lastAppointment: new Date(data.lastAppointment) });
    }

    this.closeAddModal();
  }

  modifyPatient(patient: any) {
    this.openEditModal(patient);
  }
}
interface Patient {
  id:number;
  firstName: string;
  lastName: string;
  age: number;
  assignedDoctor: string;
  lastAppointment: Date;
}