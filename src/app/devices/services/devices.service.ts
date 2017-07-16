import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IDevice } from '../../models/device.interface';
import { IDevicePowerUsage } from '../../models/device-power-usage.interface';

@Injectable()
export class DevicesService {
  constructor(private http: Http) { }

  get(id: number): Observable<IDevice> {
    const device: Observable<IDevice> = this.http.get('data/devices.json')
      .map((res: Response) => (<IDevice[]>(res.json().data))[0])
      .catch(this.handleError);

    console.log(device);
    return device;
  }

  getAll(): Observable<IDevice[]> {
    return this.http.get('assets/data/devices.txt')
      .map((res: Response) => res.json().data)
      .catch(this.handleError);
  }

  getUsage(id: number): IDevicePowerUsage[] {
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

