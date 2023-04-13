import L, { Marker } from 'leaflet';
import 'leaflet.markercluster';

import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';

import { getClusterAtCurrentZoom } from '../src/get-cluster-at-current-zoom';
import { openCluster } from '../src/open-cluster';
import { getSpiderfiedCluster } from '../src/get-spiderfied-cluster';
import { isMarkerInCluster } from '../src/is-marker-in-cluster';
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

map.addLayer(cluster);
map.addLayer(overlay);

let someMarker: Marker;
let markerInCluster: Marker;
let markerNotInCluster: Marker;

const createMarker = (pos: number[]) => {
  return L.marker(pos as any, {
    icon: L.icon({
      iconUrl: 'Marker.png',
      iconSize: [40, 40],
    }),
  });
};

const populateWithRandomMarkers = () => {
  for (let index = 0; index < 1000; index++) {
    const randomLat = Math.random() * 541;
    const randomLng = Math.random() * 800;

    const marker = createMarker([randomLat, randomLng]);

    if (index === 0) {
      someMarker = marker;
    }

    cluster.addLayer(marker);
  }
};

document.querySelector('#populate')?.addEventListener('click', () => {
  cluster.clearLayers();
  populateWithRandomMarkers();
});

document.querySelector('#clear')?.addEventListener('click', () => {
  cluster.clearLayers();
});

document.querySelector('#cluster-and-solo')?.addEventListener('click', () => {
  cluster.clearLayers();
  const marker1 = createMarker([100, 100]);
  const marker2 = createMarker([100, 100]);
  const marker3 = createMarker([200, 200]);

  cluster.addLayer(marker1);
  cluster.addLayer(marker2);
  cluster.addLayer(marker3);

  markerInCluster = marker1;
  someMarker = marker2;
  markerNotInCluster = marker3;
});

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

document.querySelector('#count-markers')?.addEventListener('click', () => {
  let inside = 0;
  let outside = 0;

  for (const marker of [markerInCluster, someMarker, markerNotInCluster]) {
    if (isMarkerInCluster(map, marker)) {
      inside++;
    } else {
      outside++;
    }
  }

  alert(`Inside: ${inside}, Outside: ${outside}`);
});

document;
