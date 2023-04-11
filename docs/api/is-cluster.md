# Is Cluster

The `isCluster` function is used to check if the provided value is a cluster layer. It takes `any` as the first argument and returns a `boolean`.

### Why do I need this function?

If you want to check if a layer is a cluster layer, you can use this function.

### Example

```typescript
import { isCluster } from 'leaflet-markercluster-utils';

const cluster = L.markerClusterGroup();

const marker1 = L.marker([0, 0]);
const marker2 = L.marker([0, 0]);

cluster.addLayer(marker1);
cluster.addLayer(marker2);

map.addLayer(cluster);

document.querySelector('#is-cluster').addEventListener('click', () => {
  console.log(isCluster(marker1)); // false
  console.log(isCluster(cluster)); // true
});
```
