import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
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
  loading:any;
  toast:any;

  constructor(private bluetoothService:HC06BluetoothService,private loadingController:LoadingController,private toastController:ToastController) {
    this.scanning = false;
    this.connecting= false;
   }

  ngOnInit() { }

  async showLoading(message) {
    this.loading = await this.loadingController.create({
      message
    });
    await this.loading.present();
  }

  dismissLoading(message) {
    this.loadingController.dismiss().then((res) => {
      console.log('Loading dismissed', res);
      this.openToast(message);
    }).catch((error) => {
      console.log('ERROR: No loading to dimiss', error);
    });
  }

  async openToast(message) {
    this.toast = await this.toastController.create({
      message,
      duration: 1500
    });
    await this.toast.present();
  }

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

  async connectToDevice(address) {
    await this.showLoading('Connecting...');
    this.connecting = true;
    this.bluetoothService.connectToDevice(address).then(res => {
      this.connecting = false;
      this.dismissLoading('Device connected');
    });
  }
}
