const containerElement = document.querySelector("#container");
const gridSizeButtonElement = document.querySelector("#gridSizeButton");

let squareGridSize = prompt("please enter grid size");

gridSizeButtonElement.addEventListener("click", event =>{
    location.reload()
})

while(squareGridSize > 100 || squareGridSize < 2){
    squareGridSize = prompt("Try a value between 2 and 100")
 };

for(let i = 0; i<= squareGridSize; i++){
    const squareRowElement = document.createElement("div");
    squareRowElement.classList.add("squareRowElement");
    containerElement.appendChild(squareRowElement)    
    for(let i = 0; i<= squareGridSize; i++){
        const squareElement = document.createElement("div");
        squareElement.classList.add("squareElement");
        squareRowElement.appendChild(squareElement);
        squareElement.addEventListener("mouseover", (event)=>{
            squareElement.classList.add("changeColor");
        })
    }
}