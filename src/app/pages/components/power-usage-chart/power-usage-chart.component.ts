import { Component, OnInit, Input } from '@angular/core';
import { DevicesService } from '../../../api/devices.service';

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

  constructor(private _devicesService: DevicesService) { }

  ngOnInit() {
    const devicePowerUsages = this._devicesService.getUsage(this.deviceId);
    this.data.labels = devicePowerUsages.map(i => i.date);
    this.data.series[0] = devicePowerUsages.map(i => i.KW);
  }

}
