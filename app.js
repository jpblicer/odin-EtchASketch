let squareGrideSize = 16;

const containerElement = document.querySelector("#container");


for(let i = 0; i<= squareGrideSize; i++){
    const squareElement = document.createElement("div");
    squareElement.classList.add("squareElement");
    containerElement.appendChild(squareElement);

}