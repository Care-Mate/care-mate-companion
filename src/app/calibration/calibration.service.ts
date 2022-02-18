import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalibrationService {
  private Back: number[][];
  private Bottom: number[][];

  constructor() { 
    this.Back = null;
    this.Bottom = null;
  }

  setBackCalibration(zero : number[][]) {
    this.Back = zero;
  }

  setBottomCalibration(zero : number[][]) {
    this.Bottom = zero;
  }

  getCalibration(calibration: number[][], to_calibrate: number[][]) {
    if(calibration == null){
      //FIX: if the calibration array is not set, it returns the input array
      console.warn("Calibration array not set yet");
      return to_calibrate;
    }
    var calibrated_array = to_calibrate;
    for(var i = 0; i< calibration.length; i++){
      for(var j = 0; j < calibration[i].length; j++){
        calibrated_array[i][j] = calibrated_array[i][j]-calibration[i][j];
      }
    }
    return calibrated_array;
  }

  getBackCalibration(to_calibrate: number[][]){
    return this.getCalibration(this.Back, to_calibrate);
  }

  getBottomCalibration(to_calibrate: number[][]){
    return this.getCalibration(this.Bottom, to_calibrate);
  }
}
