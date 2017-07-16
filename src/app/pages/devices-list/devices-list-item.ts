import { IDevice } from '../../shared/models/device.interface';

export interface IDeviceListItem {
  device: IDevice;
  usageKW: number;
}
