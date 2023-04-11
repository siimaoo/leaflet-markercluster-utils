# Open Cluster

the `openCluster` function is used to open a cluster. It takes a `MarkerClusterGroup` layer as the first argument and a `MarkerCluster` as the second argument. You can also provide a callback function as the third argument. This callback function will be called when the cluster is opened.

### Why do I need this function?

Leaflet.markercluster can open a cluster by clicking on it. But if you want to open a cluster programmatically, you need to use this function.

**_"But I can use the `.spiderfy()` function of the `MarkerCluster` class!"_**

Yes, you can. But if you don't validate if has a cluster already opened, you can have a weird behavior since leaflet.markercluster doesn't allow to open more than one cluster at the same time.

### Important Notes

- Check the [getCurrentZoomCluster](/api/get-cluster-at-current-zoom.md) function to understand how this function works.

```typescript
import { openCluster, getClusterAtCurrentZoom } from 'leaflet-markercluster-utils';

const cluster = L.markerClusterGroup();

const marker1 = L.marker([0, 0]);
const marker2 = L.marker([0, 0]);

cluster.addLayer(marker1);
cluster.addLayer(marker2);

map.addLayer(cluster);

document.querySelector('#open-cluster').addEventListener('click', () => {
  openCluster(cluster, getClusterAtCurrentZoom(map.getZoom(), marker1));
});
```
