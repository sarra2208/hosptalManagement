import { Component, OnInit } from '@angular/core';
import { ClinicService } from '../../clinic-management/clinic.service';
import { StuffService } from '../../stuff-management/stuff.service';
import { Appointment } from '../appointment';
import { AppointementService } from '../appointement.service';
import { PatientService } from '../../../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {
  constructor(private router:Router,private patientService: PatientService ,private cliniService : ClinicService,private suffService:StuffService,private appointementService : AppointementService){

  }
  ngOnInit(): void {
    this.cliniService.getClinics().subscribe(res=>{
      this.clinics = res;
    })
    this.patientService.getPatients().subscribe(res=>{
      this.patients = res;
    })
  }
    step = 1; 

  clinics:any;

  doctors :any;
  patients : any;
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
    let ap : Appointment  = new Appointment(0,this.selectedDate,this.selectedTime,"","","confirmed",this.selectedDoctor, localStorage.getItem("connectedUser")+"");  
    this.appointementService.create(ap).subscribe(res=>{
      console.log("done")
      this.router.navigate(['/appointement/list']); 
    })
    console.log(ap)


    alert(`Appointment confirmed:\nClinic: ${this.selectedClinic.name}\nDoctor: Dr. ${this.selectedDoctor.name}\nDate: ${this.selectedDate}\nTime: ${this.selectedTime}`);
  }

}

