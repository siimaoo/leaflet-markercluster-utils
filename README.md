<h1 align="center">
  Leaflet MarkerCluster Utils
</h1>

<p align="center">
  <a aria-label="version" href="https://www.npmjs.com/package/leaflet-markercluster-utils">
    <img alt="" src="https://badgen.net/npm/v/leaflet-markercluster-utils">
  </a>
  <a aria-label="License" href="https://github.com/siimaoo/leaflet-markercluster-utils/blob/main/LICENSE">
    <img alt="" src="https://badgen.net/github/license/siimaoo/leaflet-markercluster-utils">
  </a>
</p>

## Introduction

`Leaflet MarkerCluster Utils` is a lib of some functions to help work with leaflet.markercluster.
This lib is built using typescript to provide better type support.

## Quick Start

### Install

```bash
pnpm add leaflet-markercluster-utils
```

### Usage

```js
import L from 'leaflet';
import { getClusterAtCurrentZoom } from 'leaflet-markercluster-utils';

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

let someMarker: Marker;

for (let index = 0; index < 1000; index++) {
  const randomLat = Math.random() * 541;
  const randomLng = Math.random() * 800;

  const marker = L.marker([randomLat, randomLng], {
    icon: L.icon({
      iconUrl: 'Marker.png',
      iconSize: [40, 40],
    }),
  });

  if (index === 0) {
    someMarker = marker;
  }

  cluster.addLayer(marker);
}

map.addLayer(cluster);
map.addLayer(overlay);

const clusterOfMarker = getClusterAtCurrentZoom(map.getZoom(), someMarker);
openCluster(cluster, clusterOfMarker);
```

You can clone this repo and run `pnpm dev` to see the example.

<br/>

## License

The [MIT](LICENSE) License.
