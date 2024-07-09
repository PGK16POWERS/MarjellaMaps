document.addEventListener("DOMContentLoaded", () => {
    const searchbutton = document.querySelector("#search_nearest_poi");

    searchbutton.addEventListener("click", () => {
        var poi = document.querySelector("#poi-icon");

        fetchFunction();
    })
});

function fetchFunction() {

    var placeOfInterest = localStorage.getItem("fetchLocation");

    // SET LOCATION FOR EACH BANK
    fetch(`jsonFiles/${placeOfInterest}.json`)
    .then(response =>response.json())
    .then(data => {

        data.forEach(doc => {
            mapboxgl.accessToken = 'pk.eyJ1IjoicXVpY2sta3V0IiwiYSI6ImNsdWl1Zmp0YzA4cXIyaW85cWx1N2NqYWkifQ.oktkdVTSggmud8PqxSB5dg';
            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [ 28.0456, -26.2044],
                zoom: 16
              });

            var latitudez = doc.latitude;
            var longitudez = doc.longitude;

            new mapboxgl.Marker()
                .setLngLat([longitudez, latitudez])
                .addTo(map);
        });
    });
}