import { Device } from '../../shared/models/device.interface';

export interface IDeviceListItem {
  device: Device;
  usageKW: number;
}
