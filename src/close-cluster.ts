import { MarkerCluster } from 'leaflet';

export function closeCluster(cluster: MarkerCluster): void {
  if (!cluster) return;
  cluster.unspiderfy();
}
