import { Component } from '@angular/core';


interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}


@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styles: [
  ]
})
export class PropiedadesComponent{
  propiedades: Propiedad[] = [
    {
      titulo: 'Universidad Nacional de Santiago del Estero',
      descripcion: 'Facultad de Ciencias Exactas y Tecnologías',
      lngLat: [ -64.25162994261042, -27.801428908781492]
    },
    {
      titulo: 'El Zanjon - Santiago. del Estero.',
      descripcion: 'Complejo la Salamanca',
      lngLat: [ -64.24822069926361, -27.8581790347864]
    },
    {
      titulo: 'Plaza Belgrano - La Banda',
      descripcion: 'Hermosa plaza, Santiago del Estero, Argentina',
      lngLat: [ -64.2441904698407, -27.735946655047304]
    },
    {
      titulo: 'Casa de playa, México',
      descripcion: 'Hermosa casa de playa en Acapulco, México',
      lngLat: [ -99.91287720907991, 16.828940930185748]
    },
    {
      titulo: 'Apartamento, Argentina',
      descripcion: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
      lngLat: [ -58.430166677283445, -34.57150108832866 ]
    },
    {
      titulo: 'Local comercial, España',
      descripcion: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
      lngLat: [ -3.7112735618380177, 40.42567285425766 ]
    },
  ]
  constructor() { }


}
