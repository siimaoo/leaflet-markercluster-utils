import { Map, Marker } from 'leaflet';

export function isMarkerInCluster(map: Map, marker: Marker) {
  return !map.hasLayer(marker);
}
