function displayAttractions(response) {
  new Typewriter("#attractions", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAttractions(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "303634af30at1e0bobd77c2b1f682f81";
  let context =
    "Act as an experienced low-budget traveller. Help with attractions that can be visited for free. Provide 3-5 free of charge attractions in the city requested by the user. Display each recommendation in a new line in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Just provide the name of the attractions without any comments. Don't include ``` or html in your answer.";
  let prompt = `User instructions: Generate 3-5 attractions free of charge in the city provided ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let attractionsElement = document.querySelector("#attractions");
  attractionsElement.classList.remove("hidden");
  attractionsElement.innerHTML = `<div class="generating">⏳ Generating free attractions in ${instructionsInput.value}</div>`;
  
  axios.get(apiURL).then(displayAttractions);
}

let attractionsFormElement = document.querySelector("#attractions-generator-form");
attractionsFormElement.addEventListener("submit", generateAttractions);