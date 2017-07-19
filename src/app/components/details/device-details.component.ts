import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ActivatedRoute } from '@angular/router';
import { IDevice } from '../../shared/models/device.interface';
import { DevicesService } from '../../api/devices.service';
import { IDevicePowerUsage } from '../../shared/models/device-power-usage.interface';
import { NavbarTitleService } from '../../shared/components/lbd/services/navbar-title.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-device-details',
  templateUrl: 'device-details.component.html'
})

export class DeviceDetailsComponent implements OnInit {
  public id: number;
  public device: IDevice = {
    id: 0,
    name: 'loading..',
    room: 'loading...',
    isOn: false
  };
  public totalUsage: number;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private _devicesService: DevicesService,
    private _navbarTitleService: NavbarTitleService, ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this._devicesService.getAll().subscribe(d => {
        this.device = d.find(dev => this.id === dev.id);
        this._navbarTitleService.updateTitle(this.device.name + ' ( ' + this.device.room + ' )');
      });

      this.totalUsage = this._devicesService.getUsage(this.id).map(u => u.KW).reduce((a, b) => a + b, 0);
      // In a real app: dispatch action to load the details here.
    });
  }

  goBack(): void {
    this.location.back();
  }
}