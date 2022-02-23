import { Component, Host, OnInit, Optional } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as h337 from 'heatmap.js';
import { CalibrationService } from 'src/app/calibration/calibration.service';
import { HeatmapService } from 'src/app/heatmap/heatmap.service';
import { PressureMapPage } from '../pressure-map.page';

@Component({
  selector: 'app-back',
  templateUrl: './back.page.html',
  styleUrls: ['./back.page.scss'],
})
export class BackPage implements OnInit {
  private heatmap : any;
  private heatmapConfig: any;

  private heatmapService : HeatmapService;
  private platform : Platform;

  constructor (
    private HeatmapService : HeatmapService,
    private Platform : Platform
  )
  {
    this.heatmapService = HeatmapService;
    this.platform = Platform;
  }

  ngOnInit() {
    this.heatmapService.setScale(this.platform.width());
    this.heatmapConfig = this.heatmapService.getBackHeatmapConfiguration(document.getElementById("backHeatmapContainer"));
    this.heatmap = h337.create(this.heatmapConfig);
  }

  ionViewDidEnter() {
    this.heatmap.setData({max: 1, min: 0, data: this.heatmapService.getBackHeatmapData()});
  }
}
