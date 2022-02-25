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
  calibrateArray(calibration: Array<Array<number>>, toCalibrate: Array<Array<number>>) {
    // Will modify toCalibrate
    if(calibration == null){
      // FIX: if the calibration array is not set, it returns the input array
      console.warn("Calibration array not set yet");
      return toCalibrate;
    }
    for(var i = 0; i< calibration.length; i++){
      for(var j = 0; j < calibration[i].length; j++){
        toCalibrate[i][j] = calibration[i][j] - toCalibrate[i][j];
      }
    }
  }

  getBackCalibrated(toCalibrate: Array<Array<number>>){
    var calibratedArray = []
    // Coppy array
    for(var i = 0; i< toCalibrate.length; i++){
      calibratedArray.push([... toCalibrate[i]])
    }
    this.calibrateArray(this.back, calibratedArray)
    return calibratedArray;
  }

  getBottomCalibrated(toCalibrate: Array<Array<number>>){
    var calibratedArray = []
    // Coppy array
    for(var i = 0; i< toCalibrate.length; i++){
      calibratedArray.push([... toCalibrate[i]])
    }
    this.calibrateArray(this.bottom, toCalibrate);
    return calibratedArray;
  }
}
