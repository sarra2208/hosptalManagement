import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListPatientComponent } from './list-patient/list-patient.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'patient',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: ListPatientComponent,
        data: {
          title: 'List Patient',
        },
      },
      {
        path: 'add',
        component: AddPatientComponent,
        data: {
          title: 'ADD new patient',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PatientRoutingModule {}
