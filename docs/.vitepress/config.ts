import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/leaflet-markercluster-utils/',
  title: 'Leaflet Marker Cluster Utils',
  description: 'Docs of leaflet-markercluster-utils',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Introduction', link: '/introduction' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'API', link: '/api/open-cluster' },
    ],

    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
      {
        text: 'API',
        items: [
          { text: 'openCluster', link: '/api/open-cluster' },
          { text: 'closeCluster', link: '/api/close-cluster' },
          { text: 'getClusterAtCurrentZoom', link: '/api/get-cluster-at-current-zoom' },
          { text: 'getSpiderfiedCluster', link: '/api/get-spiderfied-cluster' },
          { text: 'isCluster', link: '/api/is-cluster' },
          { text: 'isMarker', link: '/api/is-marker' },
          { text: 'findMarker', link: '/api/find-marker' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/siimaoo/leaflet-markercluster-utils' },
    ],
  },
});
