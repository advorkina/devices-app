import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PowerSwitchComponent } from './power-switch.component';
import { NotificationsService } from 'angular2-notifications';
import { DevicesProvider } from '../../../api/devices.provider';
import { HttpModule } from '@angular/http';
import { SwitchComponent } from 'angular2-bootstrap-switch/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PowerSwitchComponent', () => {
 let component: PowerSwitchComponent;
 let fixture: ComponentFixture<PowerSwitchComponent>;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpModule, BrowserAnimationsModule],
     declarations: [ PowerSwitchComponent, SwitchComponent ],
     providers: [NotificationsService, DevicesProvider],
   })
   .compileComponents();
 }));

 beforeEach(() => {
   fixture = TestBed.createComponent(PowerSwitchComponent);
   component = fixture.componentInstance;
   component.device = {id: 1, isOn: true, name: 'test', room: 'test'};
   fixture.detectChanges();
 });

 it('should be created', () => {
   component.device = {id: 1, isOn: true, name: 'test', room: 'test'};
   expect(component).toBeTruthy();
 });
});
