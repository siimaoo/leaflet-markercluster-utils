import { Layer, MarkerClusterGroup } from 'leaflet';

export function isCluster(layer: Layer) {
  return layer instanceof MarkerClusterGroup;
}
