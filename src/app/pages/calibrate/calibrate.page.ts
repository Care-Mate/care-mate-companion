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

  ngOnInit() {
  }

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'Calibrating...'
    });
    await this.loading.present();
  }

  async openToast(message) {
    this.toast = await this.toastController.create({
      message,
      duration: 1500
    });
    await this.toast.present();
  }

  async calibrate() {
    debugger;
    await this.showLoading();
    var arr_to_calibrate =  Array(8).fill(Array(8).fill(0));
    this.calibrationService.setBottomCalibration().then(() => {
      this.loading.dismiss();
      this.openToast("Calibrated successfully");
      console.log(this.calibrationService.getBottomCalibrated(arr_to_calibrate));
    })
    .catch(() => {
      this.loading.dismiss();
      this.openToast("Calibration failed. Try again in a moment.");
    });
  }
}
