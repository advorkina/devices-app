import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist/src/chartist.component';

import { LbdSidebarComponent } from '../template/lbd-sidebar/lbd-sidebar.component';
import { LbdSidebarItemsComponent } from '../template/lbd-sidebar-items/lbd-sidebar-items.component';

export interface DropdownLink {
  title: string;
  routerLink?: string;
}

export enum NavItemType {
  Sidebar = 1, // Only ever shown on sidebar
  NavbarLeft = 2, // Left-aligned icon-only link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
  NavbarRight = 3 // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
}

export interface NavItem {
  type: NavItemType;
  title: string;
  routerLink?: string;
  iconClass?: string;
  numNotifications?: number;
  dropdownItems?: (DropdownLink | 'separator')[];
}

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ChartistModule
  ],
  declarations: [
    LbdSidebarComponent,
    LbdSidebarItemsComponent
  ],
  exports: [
    LbdSidebarComponent
  ]
})
export class TemplateModule { }
