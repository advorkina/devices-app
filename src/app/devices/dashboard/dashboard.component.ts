import { Component, OnInit } from '@angular/core';
import { ChartType, LegendItem } from '../../lbd/lbd-chart/lbd-chart.component';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { DevicesService } from '../services/devices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  providers: [DevicesService],
  animations: [
    trigger('cardemail', [
      state('*', style({
        '-ms-transform': 'translate3D(0px, 0px, 0px)',
        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
        '-moz-transform': 'translate3D(0px, 0px, 0px)',
        '-o-transform': 'translate3D(0px, 0px, 0px)',
        transform: 'translate3D(0px, 0px, 0px)',
        opacity: 1
      })),
      transition('void => *', [
        style({
          opacity: 0,
          '-ms-transform': 'translate3D(0px, 150px, 0px)',
          '-webkit-transform': 'translate3D(0px, 150px, 0px)',
          '-moz-transform': 'translate3D(0px, 150px, 0px)',
          '-o-transform': 'translate3D(0px, 150px, 0px)',
          transform: 'translate3D(0px, 150px, 0px)',
        }),
        animate('0.3s 0s ease-out')
      ])
    ]),
    trigger('cardprofile', [
      state('*', style({
        '-ms-transform': 'translate3D(0px, 0px, 0px)',
        '-webkit-transform': 'translate3D(0px, 0px, 0px)',
        '-moz-transform': 'translate3D(0px, 0px, 0px)',
        '-o-transform': 'translate3D(0px, 0px, 0px)',
        transform: 'translate3D(0px, 0px, 0px)',
        opacity: 1
      })),
      transition('void => *', [
        style({
          opacity: 0,
          '-ms-transform': 'translate3D(0px, 150px, 0px)',
          '-webkit-transform': 'translate3D(0px, 150px, 0px)',
          '-moz-transform': 'translate3D(0px, 150px, 0px)',
          '-o-transform': 'translate3D(0px, 150px, 0px)',
          transform: 'translate3D(0px, 150px, 0px)',
        }),
        animate('0.3s 0.25s ease-out')
      ])
    ])
  ]
})

export class DashboardComponent implements OnInit {
  public totalDevicesNumber: number;
  public switchedOnDevicesNumber: number;

  options = {
    low: 0,
    showArea: true
  };
  data = {
    'labels': ['01.07', '02.07', '03.07', '04.07'],
    'series': [[20, 50, 60, 30]]
  };

  constructor(
    private _devicesService: DevicesService) { }

  ngOnInit() {
    this._devicesService.getAll().subscribe(devices => {
      this.totalDevicesNumber = devices.length;
      this.switchedOnDevicesNumber = devices.filter(d => d.isOn).length;

      const devicePowerUsages = this._devicesService.getUsage(1);
      this.data.labels = devicePowerUsages.map(i => i.date);
      this.data.series[0] = devicePowerUsages.map(i => i.KW);
    });
  }
}

