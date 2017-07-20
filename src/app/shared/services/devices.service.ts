import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Device } from '../models/device.interface';
import { DevicePowerUsage } from '../models/device-power-usage.interface';
import { DevicesProvider } from '../../api/devices.provider';
import { RoomWithDevices } from '../models/room-with-devices.interface';
import { DevicesPowerUsageProvider } from '../../api/devices-power-usage.provider';

@Injectable()
export class DevicesService {
  constructor(
    private _devicesProvider: DevicesProvider,
    private _devicesPowerUsageProvider: DevicesPowerUsageProvider
  ) { }

  getDevicesPerRoom(): Observable<RoomWithDevices[]> {
    const roomsWithDevices: RoomWithDevices[] = [];
    return this._devicesProvider.getAll().map(devices => {
      const rooms: string[] = devices.map(d => d.room).filter((x, i, a) => a.indexOf(x) === i);
      rooms.forEach(r => {
        const room: RoomWithDevices = {
          room: r,
          devices: []
        };

        devices.filter(d => d.room === r).forEach(d => {
          room.devices.push({
            device: d,
            usageKW: this._devicesPowerUsageProvider.getByDevice(d.id).map(u => u.KW).reduce((a, b) => a + b, 0)
          });
        });

        roomsWithDevices.push(room);
      });

      return roomsWithDevices;
    });
  }
}
