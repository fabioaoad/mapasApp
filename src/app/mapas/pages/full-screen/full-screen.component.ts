import { Component, OnInit } from '@angular/core';

//toma toda la libreria de mapbox-gl y se va conocet como mapboxgl
import  * as mapboxgl from 'mapbox-gl';


import {environment} from "../../../../environments/environment";


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

    (mapboxgl.accessToken as any) = environment.mapboxToken;
    var map = new mapboxgl.Map({
      container: 'mapa',
      style: 'mapbox://styles/mapbox/streets-v11'
    });
  }

}
