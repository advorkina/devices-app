import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Device } from '../shared/models/device.interface';
import { DevicePowerUsage } from '../shared/models/device-power-usage.interface';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class DevicesService {
  private devicesUrl = 'api/devices';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private http: Http) { }

  get(id: number): Observable<Device> {
    const url = `${this.devicesUrl}/${id}`;
    return this.http.get(url)
      .map((res: Response) => (res.json().data as Device))
      .catch(this.handleError);
  }

  getAll(): Observable<Device[]> {
    return this.http.get(this.devicesUrl)
      .map((res: Response) => res.json().data as Device[])
      .catch(this.handleError);
  }

  update(device: Device): Observable<Device> {
    const url = `${this.devicesUrl}/${device.id}`;
    return this.http
      .put(url, JSON.stringify(device), { headers: this.headers })
      .map(() => device)
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

