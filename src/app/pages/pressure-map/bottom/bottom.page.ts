import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as h337 from 'heatmap.js';
import { CalibrationService } from 'src/app/calibration/calibration.service';
import { HeatmapService } from 'src/app/heatmap/heatmap.service';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.page.html',
  styleUrls: ['./bottom.page.scss'],
})
export class BottomPage implements OnInit {
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
  }

  ionViewDidEnter() {
    this.heatmapService.setScale(this.platform.width());
    this.heatmapConfig = this.heatmapService.getBottomHeatmapConfiguration(document.getElementById("bottomHeatmapContainer"));
    this.heatmap = h337.create(this.heatmapConfig);
    this.heatmap.setData({max: 1, min: 0, data: this.heatmapService.getBottomHeatmapData()});
  }
}
