import { Injectable } from '@angular/core';
import { Coordinate } from '../bluetooth/bluetooth.service';

@Injectable({
  providedIn: 'root'
})
export class CalibrationService {
  private Zero: Array<Coordinate>;

  constructor() { 
    this.Zero = [];
  }

  manualCalibration(zero : number) {
    this.Zero = [];
    for(var i = 1; i<=8; i++)
    {
      for(var j = 1; j<=8; j++)
      {
        this.Zero.push({x: i, y: j, value: zero});
      }
    }
  }

  automaticCalibration(zero : Array<Coordinate>) {
    this.Zero = zero;
  }

  getCalibration() {
    return this.Zero;
  }
}
