import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ListPatientComponent } from './list-patient/list-patient.component';
import { OutilPatientComponent } from './outil-patient/outil-patient.component';
import { PatientRoutingModule } from './patient-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



// Theme Routing

@NgModule({
  imports: [
    CommonModule,
    PatientRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    AddPatientComponent,
    ListPatientComponent,
    OutilPatientComponent 
  ]
})
export class PatientModule {
}
