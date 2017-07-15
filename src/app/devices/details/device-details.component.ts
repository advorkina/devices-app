import { Component, OnInit, OnDestroy } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { ActivatedRoute } from '@angular/router';
import { IDevice } from '../../models/device.interface';
import { DevicesService } from '../services/devices.service';
import { IDevicePowerUsage } from "../../models/device-power-usage.interface";

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
    room: 'loading...'
  };
  devicePowerUsages: IDevicePowerUsage[];
  options = {
    low: 0,
    showArea: true
  };
  data = {
    'labels': [],
    'series': [[]]
  };

  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private _devicesService: DevicesService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this._devicesService.getAll().subscribe(d => this.device = d.find(d => 1 === d.id));

      this._devicesService.getAllUsages().subscribe(
        d => {
          this.devicePowerUsages = d.filter(d => 1 === d.id);
          this.data.labels = this.devicePowerUsages.map(i => i.date);
          this.data.series[0] = this.devicePowerUsages.map(i => i.KW);
        });
      // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
