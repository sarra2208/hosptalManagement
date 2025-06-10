import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { DepartmentListComponent } from './department-list/department-list.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'departement',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: DepartmentListComponent,
        data: {
          title: 'List departement',
        },
      },
      {
        path: 'add',
        component: AddDepartmentComponent,
        data: {
          title: 'ADD new departement',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartementRoutingModule {}
