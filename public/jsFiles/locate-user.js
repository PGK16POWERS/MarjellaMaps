document.addEventListener("DOMContentLoaded", () => {

    const accessUserLocationButton = document.querySelector("#locationButton");

    accessUserLocationButton.addEventListener("click", () => {
        showMap();
    });

});

function showMap() {

    navigator.geolocation.getCurrentPosition((position) => {

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const accessToken = 'pk.eyJ1IjoicXVpY2sta3V0IiwiYSI6ImNsdWl1Zmp0YzA4cXIyaW85cWx1N2NqYWkifQ.oktkdVTSggmud8PqxSB5dg'; 
        const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${accessToken}`;

        // SET THE NAME OF THE USERS LOCATION
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


        // SET THE MAP FRAME TO THE USERS LOCATION
        var map = new mapboxgl.Map({
          container: 'map',
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [longitude , latitude],
          zoom: 16
        });

        // SET PIN ON THE USERS EXACT LOCATION
        const customMarker = document.createElement("img");
        customMarker.setAttribute("src","/assets/marjella_icon.svg");
        customMarker.style.width = "50px";
        customMarker.style.height = "50px";

        new mapboxgl.Marker(customMarker)
            .setLngLat([longitude, latitude])
            .addTo(map);

    });

}


