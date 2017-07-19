import { Component, OnInit, Input } from '@angular/core';
import { DevicesService } from '../../../api/devices.service';
import { DevicesPowerUsageService } from '../../../api/devices-power-usage.service';

@Component({
  selector: 'app-power-usage-chart',
  templateUrl: './power-usage-chart.component.html',
  providers: [DevicesService]
})
export class PowerUsageChartComponent implements OnInit {
  @Input()
  public deviceId;

  public options = {
    low: 0,
    showArea: true
  };

  public data = {
    'labels': [],
    'series': []
  };

  constructor(private _devicePowerUsageService: DevicesPowerUsageService) { }

  ngOnInit() {
    const devicePowerUsages = this._devicePowerUsageService.getByDevice(this.deviceId);
    this.data.labels = devicePowerUsages.map(i => i.date);
    this.data.series[0] = devicePowerUsages.map(i => i.KW);
  }
}
