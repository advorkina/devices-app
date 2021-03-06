import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemotyDevicesApiService implements InMemoryDbService {
  createDb() {
    const devices = [
      { 'id': 1, 'name': 'Kitchen Aid', 'room': 'Kitchen', 'isOn': true },
      { 'id': 2, 'name': 'Mr. Coffee Smart', 'room': 'Kitchen', 'isOn': false },
      { 'id': 3, 'name': 'Miele Washing Machine', 'room': 'Kitchen', 'isOn': true },
      { 'id': 4, 'name': 'Smart TV Samsung', 'room': 'Living Room', 'isOn': true },
      { 'id': 5, 'name': 'Robot Vacuum', 'room': 'Living Room', 'isOn': false },
      { 'id': 6, 'name': 'Philips Hue', 'room': 'Bedroom', 'isOn': false },
      { 'id': 7, 'name': 'Nest Cam Indoor', 'room': 'Bedroom', 'isOn': false }
    ];
    return {devices};
  }
}
