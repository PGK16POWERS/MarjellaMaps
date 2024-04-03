document.addEventListener("DOMContentLoaded", () => {
    const locationButton = document.querySelector("#locationButton");
    const outputDiv = document.querySelector("#userLocation");

    locationButton.addEventListener("click", () => {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {

                const longitude = position.coords.longitude;
                const latitude = position.coords.latitude;
                const accessToken = "pk.eyJ1IjoicXVpY2sta3V0IiwiYSI6ImNsdWl1Zmp0YzA4cXIyaW85cWx1N2NqYWkifQ.oktkdVTSggmud8PqxSB5dg"

                fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${accessToken}`)

                    .then(response => response.json())
                    .then(data => {
                        if (data.features && data.features.length > 0) {
                            outputDiv.value = data.features[0].place_name;
                            console.log(data.features[0].place_name);
                        } else {
                            console.log("Location not found.");
                        }
                    })
                    .catch((error) => {
                        console.error("Error occurred while fetching your data: ", error);
                        outputDiv.value = "Error Experienced"
                    })
                
            });
        } else {
            console.log("Navigator is not support by your local browser");
        }
        
    })
})