import {AfterViewInit, Component, ElementRef, OnDestroy, ViewChild} from '@angular/core';
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
        width: 400px;
      }
    `
  ]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {

  @ViewChild('mapa') divMapa!: ElementRef;


  mapa!: mapboxgl.Map;
  zoomLevel: number = 10;
  center: [number,number] = [ -64.24425212451473, -27.73596197595897 ];

  constructor() {}

  ngOnDestroy(): void {
    this.mapa.off('zoom', () => {});
    this.mapa.off('zoomend', () => {});
    this.mapa.off('move', () => {});    }

  ngAfterViewInit(): void {

 // console.log('afterViewInit', this.divMapa);
    this.mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
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

    //MOVIMIENTO DEL MAPA
    this.mapa.on('move', (event) => {
      //console.log(event);
      const target = event.target;
      const { lng, lat } = target.getCenter();
      //console.log(target.getCenter());
      this.center = [ lng, lat ];
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
