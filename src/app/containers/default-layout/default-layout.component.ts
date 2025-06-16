import { Component } from '@angular/core';

import { navItems } from './_nav';
import { INavData } from '@coreui/angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html',
})
export class DefaultLayoutComponent {

public navItems: INavData[] = [];

  public perfectScrollbarConfig = {
    suppressScrollX: true,
  };
    ngOnInit(): void {
    const currentUserRole = this.getCurrentUserRole(); // e.g., 'admin'
    this.navItems = this.filterNavItemsByRole(navItems, currentUserRole);
  }
  getCurrentUserRole(): any {
    // Replace with actual logic to get user role
    return localStorage.getItem("role");
  }

  filterNavItemsByRole(items: INavData[], role: string): INavData[] {
    return items
      .filter(item => {
        return !item.roles || item.roles.includes(role);
      })
      .map(item => {
        if (item.children) {
          item.children = this.filterNavItemsByRole(item.children, role);
        }
        return item;
      });
  }
  constructor() {}
}
