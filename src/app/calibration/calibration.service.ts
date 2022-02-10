import { Injectable } from '@angular/core';
import { Coordinate } from '../bluetooth/bluetooth.service';

@Injectable({
  providedIn: 'root'
})
export class CalibrationService {
  private Zero: number[][];

  constructor() { 
    this.Zero = null;
  }

  setCalibration(zero : number[][]) {
    this.Zero = zero;
  }

  getCalibration(to_calibrate: number[][]) {
    if(this.Zero == null){
      //FIX: if the calibration array is not set, it returns the input array
      console.warn("Calibration array not set yet");
      return to_calibrate;
    }
    var calibrated_array : number[][];
    for(var i = 0; i< this.Zero.length; i++){
      for(var j = 0; j < this.Zero[i].length; j++){
        calibrated_array[i][j] = to_calibrate[i][j]-this.Zero[i][j];
      }
    }
    return calibrated_array;
  }
}
