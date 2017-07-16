import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ActivatedRoute } from '@angular/router';
import { IDevice } from '../../models/device.interface';
import { DevicesService } from '../services/devices.service';
import { IDevicePowerUsage } from '../../models/device-power-usage.interface';
import { NavbarTitleService } from '../../lbd/services/navbar-title.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-device-details',
  templateUrl: 'device-details.component.html',
  providers: [DevicesService]
})

export class DeviceDetailsComponent implements OnInit, OnDestroy {
  id: number;
  device: IDevice = {
    id: 0,
    name: 'loading..',
    room: 'loading...',
    isOn: false
  };
  totalUsage: number;

  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private _devicesService: DevicesService,
    private _notificationService: NotificationsService,
    private _navbarTitleService: NavbarTitleService, ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this._devicesService.getAll().subscribe(d => {
        this.device = d.find(dev => this.id === dev.id);
        this._navbarTitleService.updateTitle(this.device.name + ' ( ' + this.device.room + ' )');
      });

      this.totalUsage = this._devicesService.getUsage(this.id).map(u => u.KW).reduce((a, b) => a + b, 0);
      // In a real app: dispatch action to load the details here.
    });
  }

    toggleOnOff(device: IDevice): void {
    device.isOn = !device.isOn;
    this._notificationService.success(
      'Success',
      device.name + ' is ' + (device.isOn ? 'ON' : 'OFF'),
      {
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 20
      }
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
