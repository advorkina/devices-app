import { Component, OnInit, Input } from '@angular/core';
import { DevicesProvider } from '../../../api/devices.provider';
import { DevicesPowerUsageProvider } from '../../../api/devices-power-usage.provider';

@Component({
  selector: 'app-power-usage-chart',
  templateUrl: './power-usage-chart.component.html',
  providers: [DevicesProvider]
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

  constructor(private _devicePowerUsageService: DevicesPowerUsageProvider) { }

  ngOnInit() {
    const devicePowerUsages = this._devicePowerUsageService.getByDevice(this.deviceId);
    this.data.labels = devicePowerUsages.map(i => i.date);
    this.data.series[0] = devicePowerUsages.map(i => i.KW);
  }
}
