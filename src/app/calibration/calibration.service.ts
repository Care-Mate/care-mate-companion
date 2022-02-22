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
  getCalibration(calibration: Array<Array<number>>, to_calibrate: Array<Array<number>>) {
    if(calibration == null){
      // FIX: if the calibration array is not set, it returns the input array
      console.warn("Calibration array not set yet");
      return to_calibrate;
    }
    var calibrated_array = to_calibrate;
    for(var i = 0; i< calibration.length; i++){
      for(var j = 0; j < calibration[i].length; j++){
        calibrated_array[i][j] = calibration[i][j] - calibrated_array[i][j];
      }
    }
    return calibrated_array;
  }

  getBackCalibration(to_calibrate: Array<Array<number>>){

    return this.getCalibration(this.Back, to_calibrate);
  }

  getBottomCalibration(to_calibrate: Array<Array<number>>){

    return this.getCalibration(this.Bottom, to_calibrate);
  }
}
