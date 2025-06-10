import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule, GridModule, NavModule, TabsModule, UtilitiesModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StuffListComponent } from './../stuff-management/stuff-list/stuff-list.component';
import { AddStuffComponent } from './../stuff-management/add-stuff/add-stuff.component';
import { StuffRoutingModule } from './stuff-routing.module';



@NgModule({
  declarations: [
    AddStuffComponent,
    StuffListComponent
  ],
  imports: [
    CommonModule,
        StuffRoutingModule,
        CardModule,
        GridModule,
        UtilitiesModule,
        IconModule,
        NavModule,
        TabsModule,
        ReactiveFormsModule,
        FormsModule
        
      
  ]
})
export class StuffModule { }
