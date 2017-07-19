import { Component, OnInit, Input } from '@angular/core';
import { Device } from '../../../shared/models/device.interface';
import { NotificationsService } from 'angular2-notifications';
import { DevicesService } from '../../../api/devices.service';

@Component({
  selector: 'app-power-switch',
  templateUrl: './power-switch.component.html'
})
export class PowerSwitchComponent implements OnInit {
  @Input()
  public device: Device;

  constructor(
    private _notificationService: NotificationsService,
    private _devicesService: DevicesService) { }

  ngOnInit() {
  }

  toggleOnOff(): void {
    this.device.isOn = !this.device.isOn;
    this._devicesService.update(this.device).subscribe(() => {;
    this._notificationService.success(
      'Success',
      this.device.name + ' is ' + (this.device.isOn ? 'ON' : 'OFF'),
      {
        showProgressBar: true,
        pauseOnHover: false,
        clickToClose: true,
        maxLength: 20
      }
    );
    });
  }
}
