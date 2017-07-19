import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { NavbarTitleService } from '../../shared/components/lbd/services/navbar-title.service';
import { RoomWithDevices } from './room-with-devices.interface';
import { DevicesService } from '../../api/devices.service';
import { Device } from '../../shared/models/device.interface';
import { DevicesPowerUsageService } from '../../api/devices-power-usage.service';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-devices-list',
  templateUrl: 'devices-list.component.html',
  animations: [
    trigger('cardtable1', [
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
  ]
})

export class DevicesListComponent implements OnInit {
  public rooms: RoomWithDevices[] = [];

  constructor(
    private _navbarTitleService: NavbarTitleService,
    private _devicesService: DevicesService,
    private _devicesPowerUsageService: DevicesPowerUsageService) {
  }

  public ngOnInit() {
    this._navbarTitleService.updateTitle('Devices');

    this._devicesService.getAll().subscribe(devices => {
      const rooms: string[] = devices.map(d => d.room).filter((x, i, a) => a.indexOf(x) === i);
      rooms.forEach(r => {
        const room: RoomWithDevices = {
          room: r,
          devices: []
        };

        devices.filter(d => d.room === r).forEach(d => {
            room.devices.push({
              device: d,
              usageKW: this._devicesPowerUsageService.getByDevice(d.id).map(u => u.KW).reduce((a, b) => a + b, 0)
        }); });

        this.rooms.push(room);
      });
    });
  }
}
