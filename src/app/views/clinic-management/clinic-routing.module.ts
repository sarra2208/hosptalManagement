import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddClinicComponent } from './add-clinic/add-clinic.component';
import { ClinicListComponent } from './clinic-list/clinic-list.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'clinic',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: ClinicListComponent,
        data: {
          title: 'List clinic',
        },
      },
      {
        path: 'book',
        component: AddClinicComponent,
        data: {
          title: 'ADD new clinic',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClinicRoutingModule {}
