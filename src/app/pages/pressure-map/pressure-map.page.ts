import { Component, OnInit } from '@angular/core';
import * as h337 from "heatmap.js"
import { BluetoothService } from 'src/app/bluetooth/bluetooth.service';
import { CalibrationService } from 'src/app/calibration/calibration.service';

@Component({
  selector: 'app-pressure-map',
  templateUrl: './pressure-map.page.html',
  styleUrls: ['./pressure-map.page.scss'],
})
export class PressureMapPage implements OnInit {

  appTabs = [
    {
      title: "Back",
      icon: "tablet-portrait-outline"
    },
    {
      title: "Both",
      icon: "layers-outline"
    },
    {
      title: "Bottom",
      icon: "tablet-landscape-outline"
    }
  ]
  
  private heatmapConfiguration : any = {
    width: 400,
    height: 400,
    opacity: 0.8,
    radius: 7,
    visible: true,
  };
  private heatmap : any;
  private heatmapData : any[]; 

  constructor (
    //private CalibrationService : CalibrationService,
    //private BluetoothService : BluetoothService
  )
  {
  }

  ngOnInit() {
    this.heatmapConfiguration.container = document.getElementById('heatmapContainer'),
    this.heatmap = h337.create(this.heatmapConfiguration);

    this.heatmapData = [];
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        this.heatmapData.push({x: i, y: j, value: Math.random()});
      }
    }

    this.heatmap.setData({max: 1, min: 0, data: this.heatmapData});
  }
}
