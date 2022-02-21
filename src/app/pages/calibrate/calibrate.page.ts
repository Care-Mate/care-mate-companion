import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { CalibrationService } from 'src/app/calibration/calibration.service';

@Component({
  selector: 'app-calibrate',
  templateUrl: './calibrate.page.html',
  styleUrls: ['./calibrate.page.scss'],
})
export class CalibratePage implements OnInit {

  private loading:any;
  private toast:any;

  constructor(private loadingController:LoadingController, private toastController:ToastController, private calibrationService:CalibrationService) { }

  ngOnInit() {
  }

  async showLoading() {
    this.loading = await this.loadingController.create({
      message: 'Calibrating...'
    });
    this.loading.present();
  }

  async openToast(message) {
    this.toast = await this.toastController.create({
      message,
      duration: 1500
    });
    this.toast.present();
  }

  calibrate() {
    var arr_zero:number[][]=[[1,2,3],[23,24,25]];
    var arr_to_calibrate:number[][]=[[11,12,13],[33,34,35]];

    this.calibrationService.setCalibration(arr_zero);
    console.log(this.calibrationService.getCalibration(arr_to_calibrate));

    this.showLoading();
    setTimeout(() => {
      this.loading.dismiss();
      this.openToast('Calibrated successfully');
    }, 1500);

    console.log('Calibrated');
  }
}
