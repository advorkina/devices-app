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
    return this.http.get('assets/data/devices.json')
      .map((res: Response) => res.json().data)
      .catch(this.handleError);
  }

  getUsage(id: number): Observable<IDevicePowerUsage> {
    return this.http.get('assets/data/devices-power-usage.json')
      .map((res: Response) => res.json().data)
      .catch(this.handleError);
  }

  getAllUsages(): Observable<IDevicePowerUsage[]> {
    return this.http.get('assets/data/devices-power-usage.json')
      .map((res: Response) => res.json().data)
      .catch(this.handleError);
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

