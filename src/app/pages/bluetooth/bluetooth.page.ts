import { Component, OnInit } from '@angular/core';
import { BluetoothDevice } from 'capacitor-bluetooth-serial';
import { HC06BluetoothService } from 'src/app/bluetooth/hc06-bluetooth.service';

@Component({
  selector: 'app-bluetooth',
  templateUrl: './bluetooth.page.html',
  styleUrls: ['./bluetooth.page.scss'],
})
export class BluetoothPage implements OnInit {

  devices:BluetoothDevice[];
  scanning:Boolean;
  connecting:Boolean;

  constructor(private bluetoothService:HC06BluetoothService) {
    this.scanning = false;
    this.connecting= false;
   }

  ngOnInit() { }

  scanForDevices() {
    this.scanning = true;
    this.bluetoothService.enableBluetooth().then(res => {
      return this.bluetoothService.scanForDevices();
    }).then(res => {
      this.devices = res.devices;
      this.scanning = false;
    }).catch(error => {
      console.log(error);
      this.scanning = false;
    });
  }

  connectToDevice(address) {
    this.connecting = true;
    this.bluetoothService.connectToDevice(address).then(res => {
      this.connecting = false;
    });
  }
}
