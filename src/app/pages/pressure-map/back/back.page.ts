import { Component, Host, OnInit, Optional } from '@angular/core';
import * as h337 from 'heatmap.js';
import { CalibrationService } from 'src/app/calibration/calibration.service';
import { PressureMapPage } from '../pressure-map.page';

@Component({
  selector: 'app-back',
  templateUrl: './back.page.html',
  styleUrls: ['./back.page.scss'],
})
export class BackPage implements OnInit {
  private heatmapConfiguration : any = {
    width: 400,
    height: 400,
    radius: 70,
    visible: true,
  };
  private heatmap : any;
  private heatmapData : any[]; 

  private xscale : number;
  private yscale : number;
  private xoffset : number;
  private yoffset : number;

  private calibrationService : CalibrationService;

  constructor (
    private CalibrationService : CalibrationService,
  )
  {
    this.calibrationService = CalibrationService;

    this.xscale = this.heatmapConfiguration.width / 8; // TODO: replace 8 with width obtained from service
    this.yscale = this.heatmapConfiguration.height / 8; // TODO: ^^^
    this.xoffset = this.xscale / 2;
    this.yoffset = this.yscale / 2;
  }

  ngOnInit() {
    this.heatmapConfiguration.container = document.getElementById('heatmapContainer'),
    this.heatmap = h337.create(this.heatmapConfiguration);

    this.heatmapData = [];

    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        this.heatmapData.push({
          x: i*this.xscale + this.xoffset,
          y: j*this.yscale + this.yoffset,
          value: Math.random()});
      }
    }

    this.heatmap.setData({max: 1, min: 0, data: this.heatmapData});
  }
}
