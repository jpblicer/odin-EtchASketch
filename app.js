let squareGridSize = 26;

const containerElement = document.querySelector("#container");

for(let i = 0; i<= squareGridSize; i++){
    const squareRowElement = document.createElement("div");
    squareRowElement.classList.add("squareRowElement");
    containerElement.appendChild(squareRowElement)    
    for(let i = 0; i<= squareGridSize; i++){
        const squareElement = document.createElement("div");
        squareElement.classList.add("squareElement");
        squareRowElement.appendChild(squareElement);    
    }
}
