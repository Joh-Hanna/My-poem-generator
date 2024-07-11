function generatePoem(event) {
    event.preventDefault();

    new Typewriter("#poem", {
        strings: "Each flower a wilting sun",
        autoStart: true,
        delay: 1,
        cursor: "",
      });
    
    
      
}


let poemForm = document.querySelector("#generate-poem");
poemForm.addEventListener("submit", generatePoem);
console.log(poemForm);