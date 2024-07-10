document.addEventListener("DOMContentLoaded", () => {

    mapboxgl.accessToken = 'pk.eyJ1IjoicXVpY2sta3V0IiwiYSI6ImNsdWl1Zmp0YzA4cXIyaW85cWx1N2NqYWkifQ.oktkdVTSggmud8PqxSB5dg';

    const map = new mapboxgl.Map({
        container: 'map', // ID of the map container element
        style: 'mapbox://styles/mapbox/standard',
        center: [28.0500, -26.2000], // Default center coordinates
        zoom: 16,
        pitch:60
      });

      map.on('style.load', () => {
        map.setConfigProperty('basemap', 'lightPreset', 'dawn');
        map.setConfigProperty('basemap', 'showPointOfInterestLabels', true);
      });

})