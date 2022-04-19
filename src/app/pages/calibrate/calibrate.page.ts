import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { BluetoothService } from 'src/app/bluetooth/bluetooth.service';
import { LocalBluetoothService } from 'src/app/bluetooth/local-bluetooth.service';
import { CalibrationService } from 'src/app/calibration/calibration.service';

@Component({
  selector: 'app-calibrate',
  templateUrl: './calibrate.page.html',
  styleUrls: ['./calibrate.page.scss'],
})
export class CalibratePage implements OnInit {

  private loading:any;
  private toast:any;

  constructor(
    private loadingController:LoadingController,
    private toastController:ToastController,
    private calibrationService:CalibrationService,
    private bluetoothService:LocalBluetoothService) { }

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

  async calibrateBack() {
    debugger;
    await this.showLoading('Calibrating...');
    var arr_to_calibrate =  Array(8).fill(Array(8).fill(0));
    this.calibrationService.setBackCalibration().then(() => {
      console.log(this.calibrationService.getBackCalibrated(arr_to_calibrate));
      this.dismissLoading('Calibrated successfully');
    })
    .catch(() => {
      this.dismissLoading('Calibration failed. Try again in a moment.');
    });
  }

  async calibrateBottom() {
    debugger;
    await this.showLoading('Calibrating...');
    var arr_to_calibrate =  Array(8).fill(Array(8).fill(0));
    this.calibrationService.setBottomCalibration().then(() => {
      console.log(this.calibrationService.getBottomCalibrated(arr_to_calibrate));
      this.dismissLoading('Calibrated successfully');
    })
    .catch(() => {
      this.dismissLoading('Calibration failed. Try again in a moment.');
    });
  }

  async resetBack() {
    await this.showLoading('Reseting...');
    this.calibrationService.resetBackCalibration().then(() => {
      this.dismissLoading('Reset successfully');
    })
    .catch(() => {
      this.dismissLoading('Reset failed. Try again in a moment');
    });
  }

  async resetBottom() {
    await this.showLoading('Reseting...');
    this.calibrationService.resetBottomCalibration().then(() => {
      this.dismissLoading('Reset successfully');
    })
    .catch(() => {
      this.dismissLoading('Reset failed. Try again in a moment');
    });
  }
}
