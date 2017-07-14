import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LbdModule } from './lbd/lbd.module';
import { FooterLayoutComponent } from './footer-layout/footer-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IconsComponent } from './icons/icons.component';
import { AppComponent } from './app.component';

const appRoutes: Routes = [
  {
    path: '', component: FooterLayoutComponent, children:
    [
      { path: 'dashboard', component: DashboardComponent },
      { path: '**', redirectTo: 'dashboard' }
    ]
  }
];

@NgModule({
  declarations: [
    FooterLayoutComponent,
    DashboardComponent,
    IconsComponent,
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    LbdModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
