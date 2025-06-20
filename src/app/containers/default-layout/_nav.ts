import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    title: true,
    name: 'Welcome to the app'
  },
  
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    roles: ['admin']
    /* badge: {
      color: 'info',
      text: 'NEW'
    } */
  },
  {
    title: true,
    name: 'Patient Management',
    roles: ['admin', 'patient', 'staff']
  },
  {
    name: 'Patient ',
    url: '/patient/list',
    iconComponent: { name: 'cil-star' },
    roles: ['admin', 'patient', 'staff']

  },
  {
    title: true,
    name: 'Clinics Management',
    roles: ['admin', 'patient', 'staff']

  },
  {
    name: 'Clinic ',
    url: '/clinic/list',
    iconComponent: { name: 'cil-star' },
    roles: ['admin', 'patient', 'staff']

  },
  {
    title: true,
    name: 'Departement Management',
    roles: ['admin', 'patient', 'staff']

  },
  {
    name: 'Departement ',
    url: '/departement/list',
    iconComponent: { name: 'cil-star' },
    roles: ['admin', 'patient', 'staff']
  },
  {
    title: true,
    name: 'Staff Management',
    roles: ['admin', 'patient', 'staff']
  },
  {
    name: 'Staff ',
    url: '/stuff/list',
    iconComponent: { name: 'cil-user' },
    roles: ['admin', 'patient', 'staff']
  },
  {
    title: true,
    name: 'Appointements ',
    roles: ['admin', 'patient', 'staff']
  },
  {
    name: 'Book An Appointement ',
    url: '/appointement/book',
    iconComponent: { name: 'cil-calendar' },
    roles: ['admin', 'patient']
  },
  {
    name: 'Appointement ',
    url: '/appointement/list',
    iconComponent: { name: 'cil-calendar' },
    roles: ['admin', 'patient', 'staff']
  }
 /* /*  {
    name: 'Typography',
    url: '/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  }, 
  {
    name: 'Doctors Management',
    title: true
  },
  {
    name: 'Base',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/base/accordion'
      },
      {
        name: 'Breadcrumbs',
        url: '/base/breadcrumbs'
      },
      {
        name: 'Cards',
        url: '/base/cards'
      },
      {
        name: 'Pagination',
        url: '/base/pagination'
      },
      {
        name: 'Placeholder',
        url: '/base/placeholder'
      },
      {
        name: 'Popovers',
        url: '/base/popovers'
      },
      {
        name: 'Progress',
        url: '/base/progress'
      },
      {
        name: 'Spinners',
        url: '/base/spinners'
      },
      {
        name: 'Tables',
        url: '/base/tables'
      },
      {
        name: 'Tabs',
        url: '/base/tabs'
      },
      {
        name: 'Tooltips',
        url: '/base/tooltips'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/buttons/buttons'
      },
      {
        name: 'Button groups',
        url: '/buttons/button-groups'
      },
      {
        name: 'Dropdowns',
        url: '/buttons/dropdowns'
      },
    ]
  },
  {
    name: 'Forms',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/forms/form-control'
      },
      {
        name: 'Select',
        url: '/forms/select'
      },
      {
        name: 'Checks & Radios',
        url: '/forms/checks-radios'
      },
      {
        name: 'Range',
        url: '/forms/range'
      },
      {
        name: 'Input Group',
        url: '/forms/input-group'
      },
      {
        name: 'Floating Labels',
        url: '/forms/floating-labels'
      },
      {
        name: 'Layout',
        url: '/forms/layout'
      },
      {
        name: 'Validation',
        url: '/forms/validation'
      }
    ]
  },


  // {
  //   name: 'Doctors',
  //   url: '/doctors',
  //   iconComponent: { name: 'cil-user' }
  // },

  {
    name: 'Master Entry',
    iconComponent: { name: 'cil-user' },
    url: '/masterentry',
    children: [
      {
        name: 'Doctor',
        url: '/masterentry/listdoctor',
       
      },
      {
        name: 'Specialization',
        url: '/masterentry/specialization',
      },
      {
        name: 'Department',
        url: '/masterentry/department'
      }
    ]
  },

// adddoctor
  // '/masterentry/editdoctor'
  // '/masterentry/listdoctor'
  

  {
    title: true,
    name: 'Pharmacies Management'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Forgot-Password',
        url: '/forgot-password'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
 */

  // {
  //   name: 'Profile',
  //   url: '/profile',
  //   iconComponent: { name: 'cil-user' },
  //   children: [
  //     {
  //       name: 'Profile View',
  //       url: '/profileview'
  //     },
  //     {
  //       name: 'Profile Edit',
  //       url: '/profileedit'
  //     }
      
  //   ]
  // },


];
