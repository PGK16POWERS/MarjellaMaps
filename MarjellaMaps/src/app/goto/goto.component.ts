import { Component } from '@angular/core';

@Component({
  selector: 'app-goto',
  templateUrl: './goto.component.html',
  styleUrl: './goto.component.css'
})
export class GotoComponent {

  focusedInputId: string = '';

  setFocusedInput(inputId: string) {
    this.focusedInputId = inputId;
  }

  getLocation() {
    const locationInp = document.querySelectorAll(".input-field") as NodeListOf<HTMLInputElement>;

    locationInp.forEach(inputEle => {
      var location = inputEle.value;
      const suggestionParentDiv = document.querySelector("#location_suggestion_parent") as HTMLElement;
      const geocodingUri = `https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?country=za&limit=6&proximity=ip&types=address&language=en&autocomplete=true&access_token=pk.eyJ1IjoicXVpY2sta3V0IiwiYSI6ImNsdWl1Zmp0YzA4cXIyaW85cWx1N2NqYWkifQ.oktkdVTSggmud8PqxSB5dg`;

      fetch(geocodingUri)
        .then(response => response.json())
        .then(data => {
          var suggestedLocation = data.features;

          suggestionParentDiv.innerHTML = ""

          suggestedLocation.forEach((doc: any) => {

            const sugChildDiv = document.createElement("div");
            sugChildDiv.setAttribute("class","location_suggestion_child");

            const icon = document.createElement("img");
            icon.setAttribute("class", "icon-img");
            icon.setAttribute("src","/icons/suggested_location.svg")
            sugChildDiv.appendChild(icon)

            const locationSug = document.createElement("span");
            locationSug.setAttribute("id","suggestioned_location");
            locationSug.textContent = doc.place_name;
            sugChildDiv.appendChild(locationSug)

            locationSug.addEventListener("click", () => {
              const focusedInput = document.getElementById(this.focusedInputId) as HTMLInputElement;
              if (focusedInput) {
                focusedInput.value = doc.place_name;
                suggestionParentDiv.innerHTML = '';
              }
            })

            suggestionParentDiv.appendChild(sugChildDiv);
          })

        });
    });
  }

}
