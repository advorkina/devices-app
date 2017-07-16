import { Component, OnInit, Input } from '@angular/core';
import { IDevice } from '../../../shared/models/device.interface';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-power-switch',
  templateUrl: './power-switch.component.html'
})
export class PowerSwitchComponent implements OnInit {
  @Input()
  public device: IDevice;

  constructor(private _notificationService: NotificationsService) { }

  ngOnInit() {
  }

  toggleOnOff(): void {
    this.device.isOn = !this.device.isOn;
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
  }
}
