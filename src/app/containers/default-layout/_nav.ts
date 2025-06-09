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
    /* badge: {
      color: 'info',
      text: 'NEW'
    } */
  },
  {
    title: true,
    name: 'Clinics Management'
  },
  {
    name: 'Clinic ',
    url: '/patient/list',
    iconComponent: { name: 'cil-star' }
  },
  {
    title: true,
    name: 'Stuff Management'
  },
  {
    name: 'Stuff ',
    url: '/patient/list',
    iconComponent: { name: 'cil-user' }
  },
  {
    title: true,
    name: 'Appointements '
  },
  {
    name: 'Appointement ',
    url: '/patient/list',
    iconComponent: { name: 'cil-calendar' }
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
