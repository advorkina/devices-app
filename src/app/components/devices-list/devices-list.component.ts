import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
import { NavbarTitleService } from '../../shared/components/lbd/services/navbar-title.service';
import { RoomWithDevices } from '../../shared/models/room-with-devices.interface';
import { Device } from '../../shared/models/device.interface';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DevicesService } from '../../shared/services/devices.service';

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
    private _devicesService: DevicesService) {
  }

  public ngOnInit() {
    this._navbarTitleService.updateTitle('Devices');

    this._devicesService.getDevicesPerRoom().subscribe(rooms => this.rooms = rooms);
  }
}
