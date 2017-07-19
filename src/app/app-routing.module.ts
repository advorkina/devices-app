import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterLayoutComponent } from './shared/components/footer-layout/footer-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DevicesListComponent } from './components/devices-list/devices-list.component';
import { DeviceDetailsComponent } from './components/details/device-details.component';
import { AuthGuard } from './shared/auth/auth.guard';

const appRoutes: Routes = [
  {
    path: '', component: FooterLayoutComponent, children:
    [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'devices-list', component: DevicesListComponent },
      { path: 'device-details/:id', component: DeviceDetailsComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
