import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class CalibrationService {
  private back: Array<Array<number>>;
  private bottom: Array<Array<number>>;

  constructor(private storage: Storage) { 
    this.back = null;
    this.bottom = null;
  }

  loadCalibrationData(back : Array<Array<number>>, bottom : Array<Array<number>>){
    this.back = back;
    this.bottom = bottom;
  }

  setBackCalibration(zero : Array<Array<number>>) {
    this.back = zero;
    this.storage.set('back', this.back);
  }

  setBottomCalibration(zero : Array<Array<number>>) {
    this.bottom = zero;
    this.storage.set('bottom', this.bottom);
  }

  // FIX: make private
  calibrateArray(calibration: Array<Array<number>>, to_calibrate: Array<Array<number>>) {
    // Will modify to_calibrate
    if(calibration == null){
      // FIX: if the calibration array is not set, it returns the input array
      console.warn("Calibration array not set yet");
      return to_calibrate;
    }
    for(var i = 0; i< calibration.length; i++){
      for(var j = 0; j < calibration[i].length; j++){
        to_calibrate[i][j] = calibration[i][j] - to_calibrate[i][j];
      }
    }
  }

  getBackCalibrated(to_calibrate: Array<Array<number>>){
    var calibrated_array = []
    // Coppy array
    for(var i = 0; i< to_calibrate.length; i++){
      calibrated_array.push([... to_calibrate[i]])
    }
    this.calibrateArray(this.back, calibrated_array)
    return calibrated_array;
  }

  getBottomCalibrated(to_calibrate: Array<Array<number>>){
    var calibrated_array = []
    // Coppy array
    for(var i = 0; i< to_calibrate.length; i++){
      calibrated_array.push([... to_calibrate[i]])
    }
    this.calibrateArray(this.bottom, to_calibrate);
    return calibrated_array;
  }
}
