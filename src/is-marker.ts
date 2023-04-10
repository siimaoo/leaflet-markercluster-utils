import { Layer, Marker } from 'leaflet';

export function isMarker(layer: Layer) {
  return layer instanceof Marker;
}
