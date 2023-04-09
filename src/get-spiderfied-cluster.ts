import { MarkerCluster, MarkerClusterGroup } from 'leaflet';

export function getSpiderfiedCluster(clusterLayer: MarkerClusterGroup): MarkerCluster {
  const spiderfied = (clusterLayer as any)?._spiderfied; // set type to any to access private property
  return spiderfied;
}
