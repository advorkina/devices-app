import { Component, OnInit } from '@angular/core';
import { FooterItem } from '../lbd/lbd-footer/lbd-footer.component';

@Component({
  selector: 'app-footer-layout',
  templateUrl: './footer-layout.component.html'
})
export class FooterLayoutComponent implements OnInit {
  public footerItems: FooterItem[];
  public copyright: string;

  constructor() { }

  public ngOnInit() {
    this.footerItems = [
      { title: 'Dashboard', routerLink: '/dashboard' },
      { title: 'Devices', routerLink: '/devices-list' }
    ];
    this.copyright = '&copy; 2017 <a href="https://github.com/advorkina/devices-app">Anastasia</a>';
  }
}
