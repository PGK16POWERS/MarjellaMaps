document.addEventListener("DOMContentLoaded", () => {
    defaultMap();
});

function defaultMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoicXVpY2sta3V0IiwiYSI6ImNsdWl1Zmp0YzA4cXIyaW85cWx1N2NqYWkifQ.oktkdVTSggmud8PqxSB5dg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ 28.0456, -26.2044],
        zoom: 16
      });
}