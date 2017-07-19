import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Device } from '../shared/models/device.interface';
import { IDevicePowerUsage } from '../shared/models/device-power-usage.interface';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DevicesPowerUsageService {
  private devicesUrl = 'api/devices';  // URL to web api

  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  getByDevice(id: number): IDevicePowerUsage[] {
    const usages: IDevicePowerUsage[] = [];
    for (let i = 0; i < 8; i++) {
      usages.push({
        date: '0' + (i + 1) + '.07',
        id: id,
        KW: Math.floor(Math.random() * 100) + 1
      });
    }

    return usages;
  }

  /**
  * Handle HTTP error
  */
  private handleError(error: any) {
    const errMsg: string = (error.message) ? error.message :
      error.status ? `error.status - error.statusText` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
