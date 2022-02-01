import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

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

  constructor() { }
}
