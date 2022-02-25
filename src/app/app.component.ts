import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { CalibrationService } from './calibration/calibration.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  async ngOnInit() {
    await this.storage.create();
    let back = await this.storage.get('back');
    let bottom = await this.storage.get('bottom');
    this.calibration.loadCalibrationData(back, bottom);
  }

  appPages = [
    {
      title: 'Pressure Map',
      url: '/pressure-map',
      icon: 'stats-chart'
    },
    {
      title: 'Bluetooth',
      url: '/bluetooth',
      icon: 'bluetooth'
    },
    {
      title: 'Calibrate',
      url: '/calibrate',
      icon: 'options'
    }
  ]

  constructor(private storage: Storage, private calibration: CalibrationService) { }
}
