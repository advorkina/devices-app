import { IDeviceListItem } from '../../shared/models/devices-list-item';

export interface RoomWithDevices {
  room: string;
  devices: IDeviceListItem[];
}
