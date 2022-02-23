import { Injectable } from '@angular/core';
import * as h337 from 'heatmap.js';

@Injectable({
  providedIn: 'root'
})
export class HeatmapService {

  constructor() { }

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

  private backHeatmapData : any[];
  private bottomHeatmapData : any[];

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
    this.backHeatmapData = [];
    for (var i = 0; i < 8 ; i++) {
      for (var j = 0; j < 8; j++) {
        this.backHeatmapData.push({
          x: i * this.xscale + this.xoffset,
          y: j * this.yscale + this.yoffset,
          value: Math.random()
        })
      }
    }

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
}
