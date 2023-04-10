import { MarkerCluster, MarkerClusterGroup } from 'leaflet';
import { getSpiderfiedCluster } from './get-spiderfied-cluster';

export function openCluster(
  clusterLayer: MarkerClusterGroup,
  cluster: MarkerCluster,
  onFinish?: () => void,
): void {
  const spiderfied = getSpiderfiedCluster(clusterLayer);

  if (onFinish) clusterLayer.once('spiderfied', onFinish);

  if (!spiderfied) return cluster.spiderfy();
  if ((spiderfied as any)?._leaflet_id === (cluster as any)._leaflet_id) return;
  if (spiderfied) spiderfied.unspiderfy();

  clusterLayer.once('unspiderfied', () => cluster.spiderfy());
}
