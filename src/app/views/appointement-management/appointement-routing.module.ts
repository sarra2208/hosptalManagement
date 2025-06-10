import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppointementListComponent} from '../appointement-management/appointement-list/appointement-list.component'
import {AppointmentComponent} from '../appointement-management/appointment/appointment.component'

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'appointement',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: AppointementListComponent,
        data: {
          title: 'List appointement',
        },
      },
      {
        path: 'book',
        component: AppointmentComponent,
        data: {
          title: 'ADD new appointement',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointementRoutingModule {}
