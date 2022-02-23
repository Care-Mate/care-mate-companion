import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import * as h337 from 'heatmap.js';
import { HeatmapService } from 'src/app/heatmap/heatmap.service';

@Component({
  selector: 'app-both',
  templateUrl: './both.page.html',
  styleUrls: ['./both.page.scss'],
})
export class BothPage implements OnInit {
  private backHeatmap : any;
  private backHeatmapConfig : any;
  private bottomHeatmap : any;
  private bottomHeatmapConfig : any;

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
    this.backHeatmapConfig = this.heatmapService.getBackHeatmapConfiguration(document.getElementById("bothBackHeatmapContainer"));
    this.backHeatmap = h337.create(this.backHeatmapConfig);

    document.getElementById("bothBackHeatmapContainer").style.height = this.backHeatmapConfig.height + "px";

    this.heatmapService.setScale(this.platform.width());
    this.bottomHeatmapConfig = this.heatmapService.getBottomHeatmapConfiguration(document.getElementById("bothBottomHeatmapContainer"));
    this.bottomHeatmap = h337.create(this.bottomHeatmapConfig);
  }

  ionViewDidEnter() {
    this.backHeatmap.setData({max: 1, min: 0, data: this.heatmapService.getBackHeatmapData()});

    this.bottomHeatmap.setData({max: 1, min: 0, data: this.heatmapService.getBottomHeatmapData()});
  }
}
