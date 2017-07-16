import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LbdModule } from './lbd/lbd.module';
import { TemplateModule } from './template/template.module';
import { FooterLayoutComponent } from './template/footer-layout/footer-layout.component';
import { DashboardComponent } from './devices/dashboard/dashboard.component';
import { DevicesListComponent } from './devices/devices-list/devices-list.component';
import { IconsComponent } from './icons/icons.component';
import { AppComponent } from './app.component';
import { SwitchComponent } from 'angular2-bootstrap-switch/components';
import { DeviceDetailsComponent } from './devices/details/device-details.component';
import { ChartistModule } from 'ng-chartist/src/chartist.component';
import { SimpleNotificationsModule } from 'angular2-notifications';

const appRoutes: Routes = [
  {
    path: '', component: FooterLayoutComponent, children:
    [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'devices-list', component: DevicesListComponent },
      { path: 'device-details/:id', component: DeviceDetailsComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  declarations: [
    SwitchComponent,
    FooterLayoutComponent,
    DashboardComponent,
    DevicesListComponent,
    DeviceDetailsComponent,
    IconsComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    LbdModule,
    TemplateModule,
    BrowserAnimationsModule,
    ChartistModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class AppModule { }
