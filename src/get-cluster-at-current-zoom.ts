import { Marker, MarkerCluster } from 'leaflet';

export function getClusterAtCurrentZoom(
  currentZoom: number,
  marker: Marker,
): MarkerCluster | undefined {
  const parent = (marker as any).__parent; // set type to any to access private property
  if (!parent) return undefined; // marker is not in a cluster

  const parentZoom = parent._zoom;

  if (parentZoom <= currentZoom) {
    return parent; // parent is at the current zoom so it's the cluster we want
  }

  return getClusterAtCurrentZoom(currentZoom, parent);
}
