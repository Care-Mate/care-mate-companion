import { Component, OnInit } from '@angular/core';
import { h337 } from "heatmap.js"
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
    container: document.querySelector('#heatmapCanvas')
  };

  private heatmap : any;

  constructor (
    private CalibrationService : CalibrationService,
    private BluetoothService : BluetoothService
  )
  {
    this.heatmap = h337.create(this.heatmapConfiguration);

    var junkData : any[] = [];
    for (var i = 0; i < 8; i++) {
      for (var j = 0; j < 8; j++) {
        junkData.push({x: i, y: j, value: Math.random()});
      }
    }

    this.heatmap.setData({max: 1, min: 0, data: junkData});
  }

  ngOnInit() {
  }
}
