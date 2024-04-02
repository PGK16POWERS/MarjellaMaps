document.addEventListener("DOMContentLoaded", () => {
    const locationButton = document.querySelector("#locationButton");
    const outputDiv = document.querySelector("#userLocation");

    locationButton.addEventListener("click", () => {
        if(navigator) {
            navigator.geolocation.getCurrentPosition((position) => {

                const longitude = position.coords.longitude;
                const latitude = position.coords.latitude;
                const accessToken = "pk.eyJ1IjoicXVpY2sta3V0IiwiYSI6ImNsdWl1Zmp0YzA4cXIyaW85cWx1N2NqYWkifQ.oktkdVTSggmud8PqxSB5dg"

                fetch(`https://api.mapbox.com/search/searchbox/v1/reverse?/${longitude},${latitude}.json?access_token=${accessToken}`)

                    .then(response => response.json)
                    .then(data => {
                        outputDiv.value = data;
                        console.log(data);
                    })
                    .catch((error) => {
                        console.error("Error occurred while fetching your data: ", error);
                        outputDiv.value = "Error Experienced"
                    })

                outputDiv.value = position.coords.latitude;
                
            });
        } else {
            console.log("Navigator is not support by your local browser");
        }
        
    })
})