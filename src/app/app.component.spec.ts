import { TestBed, async } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { LbdSidebarComponent } from './shared/components/lbd/lbd-sidebar/lbd-sidebar.component';
import { LbdSidebarItemsComponent } from './shared/components/lbd/lbd-sidebar-items/lbd-sidebar-items.component';
import { LbdNavbarComponent } from './shared/components/lbd/lbd-navbar/lbd-navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LbdCloseLayerComponent } from './shared/components/lbd/lbd-close-layer/lbd-close-layer.component';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';
import { LbdNavbarItemsComponent } from './shared/components/lbd/lbd-navbar-items/lbd-navbar-items.component';
import { NavbarTitleService } from './shared/components/lbd/services/navbar-title.service';
import { MobileSidebarToggleService } from './shared/components/lbd/services/mobile-sidebar-toggle.service';
import { SwitchComponent } from 'angular2-bootstrap-switch/components';

describe('AppComponent', () => {
 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [RouterTestingModule, SimpleNotificationsModule ],
     providers: [NavbarTitleService, MobileSidebarToggleService, NotificationsService],
     declarations: [
       AppComponent,
       LbdSidebarComponent,
       LbdSidebarItemsComponent,
       LbdNavbarComponent,
       LbdNavbarItemsComponent,
       LbdCloseLayerComponent,
       SwitchComponent
     ]
   }).compileComponents();
 }));

 it('should create the app', async(() => {
   const fixture = TestBed.createComponent(AppComponent);
   const app = fixture.debugElement.componentInstance;
   expect(app).toBeTruthy();
 }));
});
