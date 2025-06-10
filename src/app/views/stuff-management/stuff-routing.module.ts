import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StuffListComponent } from './stuff-list/stuff-list.component';
import { AddStuffComponent } from './add-stuff/add-stuff.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'stuff',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: StuffListComponent,
        data: {
          title: 'List Stuff',
        },
      },
      {
        path: 'add',
        component: AddStuffComponent,
        data: {
          title: 'ADD new Stuff',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StuffRoutingModule {}
