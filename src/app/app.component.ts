import { Component, OnInit } from '@angular/core';
import { NavItem, NavItemType } from './template/lbd/lbd.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public navItems: NavItem[];
  public options = {
    position: ['bottom', 'left'],
    timeOut: 0,
    lastOnBottom: true,
  };
  ngOnInit(): void {
    this.navItems = [
      { type: NavItemType.Sidebar, title: 'Dashboard', routerLink: 'dashboard', iconClass: 'pe-7s-graph' },
      { type: NavItemType.Sidebar, title: 'Devices', routerLink: 'devices-list', iconClass: 'pe-7s-radio' },
    ];
  }
}
