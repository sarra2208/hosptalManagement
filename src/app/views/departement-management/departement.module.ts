import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule, GridModule, NavModule, UtilitiesModule, TabsModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { DepartementRoutingModule } from './departement-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DepartmentListComponent } from './department-list/department-list.component';
import { AddDepartmentComponent } from './add-department/add-department.component';



// Theme Routing

@NgModule({
  imports: [
    CommonModule,
    DepartementRoutingModule,
    CardModule,
    GridModule,
    UtilitiesModule,
    IconModule,
    NavModule,
    TabsModule,
    ReactiveFormsModule,
    
  ],
  declarations: [
    DepartmentListComponent,
    AddDepartmentComponent
  ]
})
export class DepartmentModule {
}
