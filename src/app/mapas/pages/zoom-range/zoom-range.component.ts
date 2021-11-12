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
        width: 400px; //para que quede fija la el .row donde tengo el zoom
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit {

  @ViewChild('mapa') divMapa!: ElementRef;


  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;

  constructor() {
  }

  ngAfterViewInit(): void {

 // console.log('afterViewInit', this.divMapa);
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [ -64.24425212451473, -27.73596197595897 ],
      zoom: this.zoomLevel
    });

    this.mapa.on('zoom', (ev) => {
      //console.log('zoom');
      //console.log(ev);
      //const zoomActual = this.mapa.getZoom();
      //console.log(zoomActual);
      this.zoomLevel = this.mapa.getZoom();
    });

    //PARA LIMITAR HASTA 18 EL ZOOM
    this.mapa.on('zoomend', (ev) => {
      if(this.mapa.getZoom() > 18 ){
        this.mapa.zoomTo( 18 );
      }
    });
  }



  zoomOut(){
  //console.log('zoom out');
   this.mapa.zoomOut();
   //console.log('ZoomOut', this.divMapa);
    //this.zoomLevel = this.mapa.getZoom();
  }


  zooIn(){
    //console.log('zoom in');
    this.mapa.zoomIn();
    //this.zoomLevel = this.mapa.getZoom();
  }


  zoomCambio( valor: string ){
    //console.log(valor);
    this.mapa.zoomTo( Number(valor) );
  }

}
