import { Component, OnInit } from '@angular/core';

//toma toda la libreria de mapbox-gl y se va conocet como mapboxgl
import  * as mapboxgl from 'mapbox-gl';


@Component({
  selector: 'app-full-screen',
  templateUrl: './full-screen.component.html',
  styles: [
    `
      #mapa{
        height: 100%;
        width: 100%;
      }
    `
  ]
})
export class FullScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -64.24425212451473, -27.73596197595897 ],
      zoom: 18
    });
  }

}
