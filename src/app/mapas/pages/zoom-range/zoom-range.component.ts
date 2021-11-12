import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as mapboxgl from "mapbox-gl";

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [
    `
      .mapa-container{
        height: 100%;
        width: 100%;
      }

      .row{
        background-color: white;
        border-radius: 5px;
        bottom: 50px;
        left: 50px;
        padding: 10px;
        position: fixed;
        z-index: 999;
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;


  mapa!: mapboxgl.Map;

  constructor() {
  }

  ngAfterViewInit(): void {

 // console.log('afterViewInit', this.divMapa);
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -64.24425212451473, -27.73596197595897 ],
      zoom: 18
    });
  }



  zoomOut(){
  //console.log('zoom out');
   this.mapa.zoomOut();
   //console.log('ZoomOut', this.divMapa);
  }


  zooIn(){
    //console.log('zoom in');
    this.mapa.zoomIn();
  }
}
