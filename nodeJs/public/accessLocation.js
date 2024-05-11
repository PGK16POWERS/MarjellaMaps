document.addEventListener("DOMContentLoaded", () => {

    defaultMap()

    const accessUserLocationButton = document.querySelector("#locationButton");
    const selectOption = document.querySelector("#placeOfInterest");
    const searchLocation = document.querySelector("#search_nearest_poi");
    const poiIconParent = document.querySelector("#poi-icon");
    
    selectOption.addEventListener("change", () => {
        console.log(selectOption.value);
        localStorage.setItem("place_of_interest", selectOption.value);
        poiIconParent.textContent = selectOption.value;
    });

    accessUserLocationButton.addEventListener("click", () => {
        showMap();
    });

    searchLocation.addEventListener("click", () => {
        fullPassFunc();
    });

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



        // SET LOCATION FOR EACH BANK
        fetch("jsonFiles/bankLocations.json")
            .then(response =>response.json())
            .then(data => {
    
                data.forEach(doc => {
                    const bankIcons = document.createElement("img");
                    bankIcons.setAttribute("src","/assets/bank_icon.svg");
                    bankIcons.style.width = "30px";
                    bankIcons.style.height = "30px";

                    var latitudez = doc.latitude;
                    var longitudez = doc.longitude;

                    new mapboxgl.Marker(bankIcons)
                        .setLngLat([longitudez, latitudez])
                        .addTo(map);
                });
            });

    });

}

function fullPassFunc() {
    var userCurrentLocation = localStorage.getItem("user_coords");
    var placeOfInterest = localStorage.getItem("place_of_interest");


}

