import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../../clinic-management/clinic.service';
import { StuffService } from '../../stuff-management/stuff.service';
import { Appointment } from '../appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  constructor(private cliniService : ClinicService,private suffService:StuffService){

  }
  ngOnInit(): void {
    this.cliniService.getClinics().subscribe(res=>{
      this.clinics = res;
    })
  }
    step = 1; 

  clinics:any;

  doctors :any;

  selectedClinic: any;
  selectedDoctor: any;
  selectedDate: string = '';
  selectedTime: string = '';
  timeSlots: string[] = [];

  selectClinic(clinic: any) {
    this.suffService.getAllStaff().subscribe(res=>{
      this.doctors = res;
    })
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
     let ap : Appointment  ;
    
    alert(`Appointment confirmed:\nClinic: ${this.selectedClinic.name}\nDoctor: Dr. ${this.selectedDoctor.name}\nDate: ${this.selectedDate}\nTime: ${this.selectedTime}`);
  }

}

