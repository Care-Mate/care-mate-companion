import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { LocalBluetoothService } from '../bluetooth/local-bluetooth.service';
import { HC06BluetoothService } from '../bluetooth/hc06-bluetooth.service'

@Injectable({
  providedIn: 'root'
})
export class CalibrationService {
  private back: Array<Array<number>>;
  private bottom: Array<Array<number>>;

  constructor(private storage: Storage, private bluetooth: HC06BluetoothService) { 
    // FIX: Change to HCO6Bluetooth when testing bluetooth
    this.back = null;
    this.bottom = null;
  }

  loadCalibrationData(back : Array<Array<number>>, bottom : Array<Array<number>>){
    this.back = back;
    this.bottom = bottom;
  }

  setBackCalibration(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.bluetooth.readPressureData().then(data => {
        this.back = data;
        // Ensure data is actually set before resolving
        this.storage.set('back',this.back).then(_ => {
          resolve();
        }).catch(error => {
          reject(error)
        });
      }).catch(error => {
        reject(error);
      });
    });
  }

  setBottomCalibration(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      this.bluetooth.readPressureData().then(data => {
        this.bottom = data;
        // Ensure data is actually set before resolving
        this.storage.set('bottom',this.back).then(_ => {
          resolve();
        }).catch(error => {
          reject(error)
        });;
      }).catch(error => {
        reject(error);
      });
    });
  }

  private calibrateArray(calibration: Array<Array<number>>, toCalibrate: Array<Array<number>>) {
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
