document.addEventListener("DOMContentLoaded", () => {

    defaultMap()

    const accessUserLocationButton = document.querySelector("#locationButton");
    const selectOption = document.querySelector("#placeOfInterest");
    const searchLocation = document.querySelector("#search_nearest_poi");
    mapboxgl.accessToken = 'pk.eyJ1IjoicXVpY2sta3V0IiwiYSI6ImNsdWl1Zmp0YzA4cXIyaW85cWx1N2NqYWkifQ.oktkdVTSggmud8PqxSB5dg';
    
    selectOption.addEventListener("change", () => {
        console.log(selectOption.value);
        localStorage.setItem("place_of_interest", selectOption.value)
    });

    accessUserLocationButton.addEventListener("click", () => {
            accessUserLocation();
    });

    searchLocation.addEventListener("click", () => {
        fullPassFunc();
    });

    showMap();

});

function defaultMap() {
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ 28.0456, -26.2044],
        zoom: 16
      });
}

function showMap() {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;


        var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [longitude || 28.0456, latitude || -26.2044],
          zoom: 16
        });

        new mapboxgl.Marker()
            .setLngLat([longitude, latitude])
            .addTo(map);

    });
}
    

function accessUserLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Call a function to perform reverse geocoding
        reverseGeocode(latitude, longitude);

        var coordsObj = {
            latitude : position.coords.latitude,
            longitude : position.coords.longitude,
        }

        var coords = JSON.stringify(coordsObj);

        localStorage.setItem("user_coords", coords);

    });
}

function reverseGeocode(latitude, longitude) {
    const accessToken = 'pk.eyJ1IjoicXVpY2sta3V0IiwiYSI6ImNsdWl1Zmp0YzA4cXIyaW85cWx1N2NqYWkifQ.oktkdVTSggmud8PqxSB5dg'; 
    const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${accessToken}`;

    // Make a GET request to the Mapbox Geocoding API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extract the formatted address from the response
            const address = data.features[0].place_name;

            // Display the address on the page
            const locationDisplay = document.querySelector("#userLocation");
            locationDisplay.textContent = address;
        })
        .catch(error => {
            console.error('Error fetching geolocation data:', error);
        });
}

function fullPassFunc() {
    var userCurrentLocation = localStorage.getItem("user_coords");
    var placeOfInterest = localStorage.getItem("place_of_interest");


}