import { Map, Marker, MarkerClusterGroup } from 'leaflet';
import { isMarker } from './is-marker';
import { isCluster } from './is-cluster';

export function findMarker(map: Map, condition: (marker: Marker) => boolean) {
  const markers: Marker[] = [];

  map.eachLayer((layer) => {
    const validateIsMarker = isMarker(layer);
    const validateIsCluster = isCluster(layer);

    if (!validateIsMarker && !validateIsCluster) return;

    if (validateIsMarker) {
      const marker = layer as Marker;
      if (condition(marker)) markers.push(marker);
      return;
    }

    const cluster = layer as MarkerClusterGroup;

    cluster.eachLayer((layer) => {
      const marker = layer as Marker;
      if (condition(marker)) markers.push(marker);
    });
  });

  return markers;
}
