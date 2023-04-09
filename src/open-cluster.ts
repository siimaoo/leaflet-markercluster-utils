import { MarkerCluster, MarkerClusterGroup } from 'leaflet';
import { getSpiderfiedCluster } from './get-spiderfied-cluster';

export function openCluster(clusterLayer: MarkerClusterGroup, cluster: MarkerCluster): void {
  const spiderfied = getSpiderfiedCluster(clusterLayer);

  if (!spiderfied) return cluster.spiderfy();
  if ((spiderfied as any)?._leaflet_id === (cluster as any)._leaflet_id) return;
  if (spiderfied) spiderfied.unspiderfy();

  clusterLayer.once('unspiderfied', () => cluster.spiderfy());
}
