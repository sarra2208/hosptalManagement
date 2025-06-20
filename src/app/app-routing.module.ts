import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';
// import { ProfileviewComponent } from './views/profile/profileview/profileview.component';
// import { ProfileeditComponent } from './views/profile/profileedit/profileedit.component';
import { AccordionsComponent } from './views/base/accordion/accordions.component';
import { NewUserComponent } from './views/pages/new-user/new-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
       {
        path: 'appointement',
        loadChildren: () =>
          import('./views/appointement-management/appointement.module').then((m) => m.AppointementModule)
      },
       {
        path: 'patient',
        loadChildren: () =>
          import('./views/patient-management/patient.module').then((m) => m.PatientModule)
      },
      {
        path: 'departement',
        loadChildren: () =>
          import('./views/departement-management/departement.module').then((m) => m.DepartmentModule)
      },
      {
        path: 'stuff',
        loadChildren: () =>
          import('./views/stuff-management/stuff.module').then((m) => m.StuffModule)
      },
      {
        path: 'clinic',
        loadChildren: () =>
          import('./views/clinic-management/clinic.module').then((m) => m.ClinicModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'masterentry',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      // {
      //   path: 'editdoctor',
      //   loadChildren: () =>
      //     import('./views/charts/charts.module').then((m) => m.ChartsModule)
      // },


      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },
      {
        path: 'system',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
      // {
      //   path: 'profile',
      //   loadChildren: () =>
      //     import('./views/profile/profile.module').then((m) => m.ProfileModule)
      // },
      {
        path: 'accordion',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },


    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'forgot-password',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
   {
    path: 'register',
    component: NewUserComponent,
    data: {
      title: 'Register Page'
    }
  },

  // {
  //   path: 'profileview',
  //   component: ProfileviewComponent,
  //   data: {
  //     title: 'Profile View'
  //   }
  // },

  // {
  //   path: 'profileedit',
  //   component: ProfileeditComponent,
  //   data: {
  //     title: 'Profile Edit'
  //   }
  // },

  {
    path: 'accordion',
    component: AccordionsComponent,
    data: {
      title: 'AccordionsComponent'
    }
  },


  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
