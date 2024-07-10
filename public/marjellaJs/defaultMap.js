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
        map.setFog({
            color: 'rgb(186, 210, 235)', // Lower atmosphere
            'high-color': 'rgb(36, 92, 223)', // Upper atmosphere
            'horizon-blend': 0.02, // Atmosphere thickness (default 0.2 at low zooms)
            'space-color': 'rgb(11, 11, 25)', // Background color
            'star-intensity': 0.6 // Background star brightness (default 0.35 at low zoooms )
          });
      });

})