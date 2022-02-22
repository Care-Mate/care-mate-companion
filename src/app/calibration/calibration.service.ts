import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalibrationService {
  private Back: Array<Array<number>>;
  private Bottom: Array<Array<number>>;

  constructor() { 
    this.Back = null;
    this.Bottom = null;
  }

  setBackCalibration(zero : Array<Array<number>>) {
    this.Back = zero;
  }

  setBottomCalibration(zero : Array<Array<number>>) {
    this.Bottom = zero;
  }

  // FIX: make private
  calibrateArray(calibration: Array<Array<number>>, to_calibrate: Array<Array<number>>) {
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

  getBackCalibration(to_calibrate: Array<Array<number>>){
    var calibrated_array = []
    // Coppy array
    for(var i = 0; i< to_calibrate.length; i++){
      calibrated_array.push([... to_calibrate[i]])
    }
    return this.calibrateArray(this.Back, to_calibrate);
  }

  getBottomCalibration(to_calibrate: Array<Array<number>>){
    var calibrated_array = []
    // Coppy array
    for(var i = 0; i< to_calibrate.length; i++){
      calibrated_array.push([... to_calibrate[i]])
    }
    return this.calibrateArray(this.Bottom, to_calibrate);
  }
}
