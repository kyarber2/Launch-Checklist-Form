// Write your JavaScript code here!
window.addEventListener("load", function(){
   let form = document.getElementById("launchForm");
   let json = [];
 
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
         response.json().then(function(json){
            console.log(json);
            const missionTarget = document.getElementById("missionTarget");
            missionTarget.innerHTML = `
            <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[0].name}</li>
               <li>Diameter: ${json[0].diameter}</li>
               <li>Star: ${json[0].star}</li>
               <li>Distance from Earth: ${json[0].distance}</li>
               <li>Number of Moons: ${json[0].moons}</li>
            </ol>
            <img src="${json[0].image}">
            `;
         });
      });
      form.addEventListener("submit", function(event){
         event.preventDefault();

      let pilotNameInput = document.querySelector("input[name=pilotName]");
      let copilotNameInput = document.querySelector("input[name=copilotName]");
      let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      
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
       let copilotName = document.getElementById("copilotStatus");
       let fuelStatus = document.getElementById("fuelStatus");
       let launchStatus = document.getElementById("launchStatus");
       let cargoStatus = document.getElementById("cargoStatus");

       pilotName.innerHTML = `${pilotNameInput.value} ready!`;
       copilotName.innerHTML = `${copilotNameInput.value} ready!`;
       
       if(fuelLevelInput.value < 10000 && cargoMassInput.value > 10000){
          launchStatus.style.color = "red";
          launchStatus.innerHTML = "Shuttle not ready for launch.";
          fuelStatus.innerHTML = "Not enough fuel for launch.";
          cargoStatus.innerHTML = "Too much mass for the shuttle to take off.";
       } else if(cargoMassInput.value > 10000){
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         cargoStatus.innerHTML = "Too much mass for the shuttle to take off.";
       } else if(fuelLevelInput.value < 10000){
         launchStatus.style.color = "red";
         launchStatus.innerHTML = "Shuttle not ready for launch.";
         fuelStatus.innerHTML = "Not enough fuel for launch.";
      } else{
         launchStatus.style.color = "green";
         launchStatus.innerHTML = "Shuttle ready for launch!";
         fuelStatus.innerHTML = "Sufficient fuel for launch!";
         cargoStatus.innerHTML = "Cargo mass low enough for launch.";
      }
   })
});




