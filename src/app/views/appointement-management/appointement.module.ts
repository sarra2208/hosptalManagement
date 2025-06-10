import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppointementRoutingModule } from './appointement-routing.module';
import { AppointementListComponent } from './appointement-list/appointement-list.component';
import {AppointmentComponent} from './appointment/appointment.component'



// Theme Routing

@NgModule({
  imports: [
    CommonModule,
    AppointementRoutingModule,
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
    AppointmentComponent,
    AppointementListComponent
  ]
})
export class AppointementModule {
}
