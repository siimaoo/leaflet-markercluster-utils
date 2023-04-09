import { MarkerCluster, MarkerClusterGroup } from 'leaflet';

export function isClusterSpiderfied(clusterLayer: MarkerClusterGroup, cluster: MarkerCluster) {
  const spiderfied = (clusterLayer as any)?._spiderfied; // set type to any to access private property
  if (!spiderfied) return false;

  return spiderfied._leaflet_id === (cluster as any)._leaflet_id;
}
