# Is Marker

The `isMarker` function is used to check if the provided value is a Marker. It takes `any` as the first argument and returns a `boolean`.

### Why do I need this function?

If you want to check if something is a Marker, you can use this function.

### Example

```typescript
import { isMarker } from 'leaflet-markercluster-utils';

const cluster = L.markerClusterGroup();

const marker1 = L.marker([0, 0]);
const marker2 = L.marker([0, 0]);

cluster.addLayer(marker1);
cluster.addLayer(marker2);

map.addLayer(cluster);

document.querySelector('#is-cluster').addEventListener('click', () => {
  console.log(isMarker(marker1)); // true
  console.log(isMarker(cluster)); // false
});
```
