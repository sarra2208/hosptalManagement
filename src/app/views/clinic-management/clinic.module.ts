import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddClinicComponent } from './add-clinic/add-clinic.component';
import { ClinicRoutingModule } from './clinic-routing.module';
import { ClinicListComponent } from './clinic-list/clinic-list.component';


// Theme Routing

@NgModule({
  imports: [
   CommonModule,
       ClinicRoutingModule,
       CardModule,
       GridModule,
       UtilitiesModule,
       IconModule,
       NavModule,
       TabsModule,
       ReactiveFormsModule,
       FormsModule
    
  ],
  declarations: [
    ClinicListComponent,
    AddClinicComponent
  ]
})
export class ClinicModule {
}
