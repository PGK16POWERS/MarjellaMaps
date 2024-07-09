document.addEventListener("DOMContentLoaded", () => {

    const selectOption = document.querySelector("#placeOfInterest");
    const poiIconParent = document.querySelector("#poi-icon");

    selectOption.addEventListener("change", () => {
        console.log(selectOption.value);
        localStorage.setItem("place_of_interest", selectOption.value);
        poiIconParent.textContent = selectOption.value;

        switch (selectOption.value) {
            case "account_balance":
                localStorage.setItem("fetchLocation", "bankLocations");
                break;

            case "atm":
                localStorage.setItem("fetchLocation", "atmLocations");
                break;

            case "restaurant":
                localStorage.setItem("fetchLocation", "restaurantLocations");
                break;
                
            case "local_gas_station":
                localStorage.setItem("fetchLocation", "petrolStationLocations");
                break;

            case "nature":
                localStorage.setItem("fetchLocation", "parkLocations");
                break;
                
            case "local_mall":
                localStorage.setItem("fetchLocation", "mallLocations");
                break;
                
            default:
                console.log("Error while computing");
        }
    });

});