// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event){
      event.preventDefault();
      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      //alert("pilot name: " + pilotNameInput.value + copilotNameInput.value + fuelLevelInput.value + cargoMassInput.value);
      if(pilotNameInput.value === "" || copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value ==="") {
         alert("All fields are required!");
       }
       if(!isNaN(pilotNameInput.value)){
       alert("Invalid entry. Please enter pilot name.")
       } else if (!isNaN(copilotNameInput.value)) {
       alert("Invalid entry. Please enter a copilot name.")
       } else if (isNaN(fuelLevelInput.value)){
       alert("Invalid entry. Please enter a number for Fuel Level.")
       } else if (isNaN(cargoMassInput.value)) {
       alert("Invalid entry. Please enter a number for Cargo Mass.")
       };

       faultyItems.style.visibility = "visible";
       let pilotName = document.getElementById("pilotStatus");
       pilotName.innerHTML = `${pilotNameInput.value}`;
       console.log(pilotName.innerHTML);
         // <li id="pilotStatus">Pilot Ready</li>
         // <li id="copilotStatus">Co-pilot Ready</li>
         // <li id="fuelStatus">Fuel level high enough for launch</li>
         // <li id="cargoStatus">Cargo mass low enough for launch</li>
   })
});



/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
