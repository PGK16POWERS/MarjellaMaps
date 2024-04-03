document.addEventListener("DOMContentLoaded", () => {

    const reqBtn = document.querySelector("#locationButton");
    const childDiv = document.querySelector(".result-child");

    reqBtn.addEventListener("click", () => {
        // Make AJAX request to server-side endpoint
        fetch('/getActiveBarbers') // Assuming your server exposes this endpoint
            .then(response => response.json())
            .then(data => {
                // Handle the data received from the server
                // For example, you can iterate over the data and create HTML elements to display it
                data.forEach(barber => {
                    const barberDiv = document.createElement('div');
                    barberDiv.textContent = `${barber.name}, ${barber.location}`; // Example data fields
                    childDiv.appendChild(barberDiv);
                });
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                childDiv.textContent = "Error while searching for Barbers"
                childDiv.style.border = "2px solid orangered"
            });
    })

});