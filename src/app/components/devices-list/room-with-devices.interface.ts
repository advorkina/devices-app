import { IDeviceListItem } from './devices-list-item';

export interface RoomWithDevices {
  room: string;
  devices: IDeviceListItem[];
}
