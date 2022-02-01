import { Component, OnInit } from '@angular/core';

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
  
  constructor() { }

  ngOnInit() {
  }
}
