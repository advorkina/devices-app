import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartistModule } from 'ng-chartist/src/chartist.component';

import { LbdSidebarComponent } from './lbd/lbd-sidebar/lbd-sidebar.component';
import { LbdSidebarItemsComponent } from './lbd/lbd-sidebar-items/lbd-sidebar-items.component';
import { LbdNavbarComponent } from './lbd/lbd-navbar/lbd-navbar.component';
import { LbdFooterComponent } from './lbd/lbd-footer/lbd-footer.component';
import { LbdChartComponent } from './lbd/lbd-chart/lbd-chart.component';
import { LbdTaskListComponent } from './lbd/lbd-task-list/lbd-task-list.component';
import { NotificationService } from './lbd/services/notification.service';
import { LbdTableComponent } from './lbd/lbd-table/lbd-table.component';
import { LbdUserProfileComponent } from './lbd/lbd-user-profile/lbd-user-profile.component';
import { NavbarTitleService } from './lbd/services/navbar-title.service';
import { LbdCheckboxComponent } from './lbd/lbd-checkbox/lbd-checkbox.component';
import { MobileSidebarToggleService } from './lbd/services/mobile-sidebar-toggle.service';
import { LbdCloseLayerComponent } from './lbd/lbd-close-layer/lbd-close-layer.component';
import { LbdNavbarItemsComponent } from './lbd/lbd-navbar-items/lbd-navbar-items.component';
import { LbdModule } from './lbd/lbd.module';

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
    ChartistModule,
    LbdModule
  ],
  declarations: [
    LbdSidebarComponent,
    LbdSidebarItemsComponent
  ],
  exports: [
    LbdNavbarComponent,
    LbdFooterComponent,
    LbdChartComponent,
    LbdTaskListComponent,
    LbdTableComponent,
    LbdUserProfileComponent,
    LbdCloseLayerComponent
  ]
})
export class ViewComponentsModule { }
