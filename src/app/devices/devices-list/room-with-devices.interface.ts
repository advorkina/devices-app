import { IDeviceListItem } from './devices-list-item';

export interface IRoomWithDevices {
  room: string;
  devices: IDeviceListItem[];
}
