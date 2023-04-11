# Getting Started

## Installation

```bash
pnpm add leaflet-markercluster-utils
```

## Usage

```typescript
import L, { Marker } from 'leaflet';
import 'leaflet.markercluster';

import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

const map = L.map('map', {
  crs: L.CRS.Simple,
  maxZoom: 3,
}).setView([270.5, 400], 0);

const overlay = L.imageOverlay('Sample_Floorplan.jpeg', [
  [0, 0],
  [541, 800],
]);

const cluster = L.markerClusterGroup({
  showCoverageOnHover: false,
  zoomToBoundsOnClick: false,
  spiderfyOnEveryZoom: true,
});

for (let index = 0; index < 1000; index++) {
  const randomLat = Math.random() * 541;
  const randomLng = Math.random() * 800;

  const marker = L.marker([randomLat, randomLng], {
    icon: L.icon({
      iconUrl: 'Marker.png',
      iconSize: [40, 40],
    }),
    id: `test-id-${index}`,
  });

  cluster.addLayer(marker);
}

map.addLayer(cluster);
map.addLayer(overlay);
```

This is a simple leaflet map with a marker cluster. Now, think that you want to get a marker with a specific id. You can do it like this:

```typescript
import { findMarker } from 'leaflet-markercluster-utils';

const markers = findMarker(map, (marker) => marker.options?.id === 'test-id-53');
console.log(markers); // [Marker]
```
