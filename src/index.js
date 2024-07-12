function generatePoem(event, result) {
    event.preventDefault();

    let userInput = document.querySelector("#user-input");
    let apiKey = "9240352440ao0101at80cbf93b35d00b";
    let context = "You are an AI poetrist who knows many poems about any topic and who excactly follows the users instructions.";
    let prompt = `User instructions: Present me a short 4-5 lines poem about ${userInput.value}. Please use basic html format and make sure to seperate the lines with a <br>. Don't include a title or any words which are not belonging to the poem in your answer please. Do NOT add an empty line below the poem.`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div id="generating">⏳Generating poem about ${userInput.value}, please wait...</div>`;

    axios.get(apiUrl).then(showNewPoem);
    return result 
}

function showNewPoem(result) {

   
    new Typewriter("#poem", {
        strings: result.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
      });
}


let poemForm = document.querySelector("#generate-poem");
poemForm.addEventListener("submit", generatePoem);
console.log(poemForm);