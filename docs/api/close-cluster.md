# Close Cluster

The `closeCluster` function is used to close a cluster. It takes a `MarkerCluster` as the first argument.

### Why do I need this function?

Leaflet.markercluster can close a cluster by clicking on it. But if you want to close a cluster programmatically, you need to use this function.

**_"But I can use the `.unspiderfy()` function of the `MarkerCluster` class!"_**

Yes, you can. This time I don't have any good reason to convince you to use this function instead of the `.unspiderfy()` function. I just wanted to have a function to close a cluster. If you want to use the `.unspiderfy()` function, go ahead.

### Important Notes

- Check the [getCurrentZoomCluster](/api/get-cluster-at-current-zoom.md) function to understand how this function works.

```typescript
import { closeCluster, getClusterAtCurrentZoom } from 'leaflet-markercluster-utils';

const cluster = L.markerClusterGroup();

const marker1 = L.marker([0, 0]);
const marker2 = L.marker([0, 0]);

cluster.addLayer(marker1);
cluster.addLayer(marker2);

map.addLayer(cluster);

document.querySelector('#open-cluster').addEventListener('click', () => {
  closeCluster(getClusterAtCurrentZoom(map.getZoom(), marker1));
});
```
