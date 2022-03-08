import { Injectable } from '@angular/core';
import * as h337 from 'heatmap.js';
import { Observable, interval } from 'rxjs';
import { BluetoothService } from '../bluetooth/bluetooth.service';
import { LocalBluetoothService } from '../bluetooth/local-bluetooth.service';

@Injectable({
  providedIn: 'root'
})
export class HeatmapService {
  private bluetoothService: LocalBluetoothService;

  constructor(bluetoothService: LocalBluetoothService) {
    this.bluetoothService = bluetoothService;
    this.bluetoothService.setDataReceivedCallback(this.dataReceived);
    var sub = interval(3000).subscribe((val) => {this.bluetoothService.readPressureData()});
  }

  private backHeatmapConfiguration : any = {
    width: 400,
    height: 400,
    radius: 70,
    visible: true,
  };

  private bottomHeatmapConfiguration : any = {
    width: 400,
    height: 400,
    radius: 70,
    visible: true,
  };

  private backHeatmapData : any[] = [];
  private bottomHeatmapData : any[] = [];

  private backCallback : () => void;
  private bottomCallback : () => void;

  private xscale : number;
  private yscale : number;
  private xoffset : number;
  private yoffset : number;

  setScale(viewportWidth: number) {
    this.backHeatmapConfiguration.width = viewportWidth - 100;
    this.backHeatmapConfiguration.height = viewportWidth - 100;
    this.bottomHeatmapConfiguration.width = viewportWidth - 100;
    this.bottomHeatmapConfiguration.height = viewportWidth - 100;

    this.xscale = this.backHeatmapConfiguration.width / 8; // TODO: replace 8 with width obtained from service
    this.yscale = this.backHeatmapConfiguration.height / 8; // TODO: ^^^
    this.xoffset = this.xscale / 2;
    this.yoffset = this.yscale / 2;

    this.backHeatmapConfiguration.radius = Math.floor(this.xscale * 1.4);
    this.bottomHeatmapConfiguration.radius = Math.floor(this.xscale * 1.4);
  }

  setBackCallback(callback) {
    this.backCallback = callback;
  }

  getBackHeatmapConfiguration(element: HTMLElement) {
    this.backHeatmapConfiguration.container = element;
    return this.backHeatmapConfiguration;
  }

  getBottomHeatmapConfiguration(element: HTMLElement) {
    this.bottomHeatmapConfiguration.container = element;
    return this.bottomHeatmapConfiguration;
  }

  getBackHeatmapData() {
    return this.backHeatmapData;
  }

  getBottomHeatmapData() {
    this.bottomHeatmapData = [];
    for (var i = 0; i < 8 ; i++) {
      for (var j = 0; j < 8; j++) {
        this.bottomHeatmapData.push({
          x: Math.floor(i*this.xscale + this.xoffset),
          y: Math.floor(j*this.yscale + this.yoffset),
          value: Math.random()
        })
      }
    }
    
    return this.bottomHeatmapData;
  }

  dataReceived = (data: Array<Array<number>>) => {
    var newBackHeatmapData = [];
    for(var i = 0 ; i < data.length; i++) {
      for(var j = 0; j < data[i].length; j++) {
        newBackHeatmapData.push({x: this.scaleX(i), y: this.scaleY(j), value: data[i][j]});
      }
    }
    this.backHeatmapData = newBackHeatmapData;
    if (this.backCallback) {
      this.backCallback();
    }
  }

  private scaleX(x: number): number {
    return Math.floor(x * this.xscale + this.xoffset);
  }

  private scaleY(y: number): number {
    return Math.floor(y * this.yscale + this.yoffset)
  }
}
