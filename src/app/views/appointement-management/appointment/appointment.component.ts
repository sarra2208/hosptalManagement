import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {
    step = 1;

  clinics = [
    { name: 'City Health Center', address: '123 Main St', description: 'Modern, fully equipped' },
    { name: 'Green Valley Clinic', address: '45 Oak Dr', description: 'Family-oriented care' },
    { name: 'Downtown Medical', address: '789 Center Rd', description: '24/7 availability' },
  ];

  doctors = [
    { name: 'Alice Smith', specialty: 'Cardiologist' },
    { name: 'John Doe', specialty: 'General Practitioner' },
    { name: 'Linda Lee', specialty: 'Dermatologist' }
  ];

  selectedClinic: any;
  selectedDoctor: any;
  selectedDate: string = '';
  selectedTime: string = '';
  timeSlots: string[] = [];

  selectClinic(clinic: any) {
    this.selectedClinic = clinic;
    this.step = 2;
  }

  selectDoctor(doctor: any) {
    this.selectedDoctor = doctor;
    this.step = 3;
  }

  generateTimeSlots() {
    const slots = [];
    for (let h = 8; h < 18; h++) {
      slots.push(`${h}:00`);
      slots.push(`${h}:30`);
    }
    this.timeSlots = slots;
  }

  selectTime(time: string) {
    this.selectedTime = time;
    this.step = 4;
  }

  confirmAppointment() {
    alert(`Appointment confirmed:\nClinic: ${this.selectedClinic.name}\nDoctor: Dr. ${this.selectedDoctor.name}\nDate: ${this.selectedDate}\nTime: ${this.selectedTime}`);
  }

}

