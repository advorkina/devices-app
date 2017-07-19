import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { ViewComponentsModule } from './shared/components/view-components.module';
import { FooterLayoutComponent } from './shared/components/footer-layout/footer-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { IconsComponent } from './shared/components/icons/icons.component';
import { AppComponent } from './app.component';
import { SwitchComponent } from 'angular2-bootstrap-switch/components';
import { DeviceDetailsComponent } from './components/details/device-details.component';
import { ChartistModule } from 'ng-chartist/src/chartist.component';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { PowerUsageChartComponent } from './components/shared/power-usage-chart/power-usage-chart.component';
import { PowerSwitchComponent } from './components/shared/power-switch/power-switch.component';
import { DevicesService } from './api/devices.service';
import { InMemotyDevicesApiService } from './api/in-memory-devices-api.service';

import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared/auth/auth.guard';

@NgModule({
  declarations: [
    SwitchComponent,
    FooterLayoutComponent,
    DashboardComponent,
    DevicesListComponent,
    DeviceDetailsComponent,
    IconsComponent,
    AppComponent,
    PowerUsageChartComponent,
    PowerSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ViewComponentsModule,
    BrowserAnimationsModule,
    ChartistModule,
    SimpleNotificationsModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemotyDevicesApiService)
  ],
  providers: [DevicesService, AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class AppModule { }
