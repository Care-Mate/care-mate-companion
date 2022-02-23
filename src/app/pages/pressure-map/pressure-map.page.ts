import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs, TabsCustomEvent } from '@ionic/angular';
import * as h337 from "heatmap.js"
import { BluetoothService } from 'src/app/bluetooth/bluetooth.service';
import { CalibrationService } from 'src/app/calibration/calibration.service';

@Component({
  selector: 'app-pressure-map',
  templateUrl: './pressure-map.page.html',
  styleUrls: ['./pressure-map.page.scss'],
})
export class PressureMapPage implements OnInit {

  
  constructor () {
  }

  ngOnInit() {
  }
}
