import L, { Marker } from 'leaflet';
import 'leaflet.markercluster';

import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import { getClusterAtCurrentZoom } from '../src/get-cluster-at-current-zoom';
import { openCluster } from '../src/open-cluster';
import { getSpiderfiedCluster } from '../src/get-spiderfied-cluster';
import { closeCluster } from '../src/close-cluster';

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

document.querySelector('#open-cluster')?.addEventListener('click', () => {
  const currentCluster = getClusterAtCurrentZoom(map.getZoom(), someMarker);
  if (!currentCluster) return;
  openCluster(cluster, currentCluster, () => {
    console.log('onfinish');
  });
});

document.querySelector('#close-cluster')?.addEventListener('click', () => {
  const currentCluster = getSpiderfiedCluster(cluster);
  closeCluster(currentCluster);
});
