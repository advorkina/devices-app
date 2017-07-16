import { IDevice } from '../../models/device.interface';

export interface IDeviceListItem {
  device: IDevice;
  usageKW: number;
}
