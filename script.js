
function createGrid(dimension) {
    let boxes = dimension * dimension; 
    const container = document.querySelector(".sketch-board");
    while (boxes > 0) {
        const div = document.createElement("div");
    
        div.addEventListener("mouseover", () => div.classList.add("colored-box"));
    
        container.appendChild(div);
        boxes--;
    }
}

function clear() {
    let dimension = prompt("How many squares per side for the new grid? (100 MAX)");
    if (dimension > 100) {
        alert("Too high! The maximum is 100 squares.")
    } else if (dimension > 0){
        const container = document.querySelector(".sketch-board");
        container.innerHTML = "";
        container.style.gridTemplateColumns = `repeat(${dimension}, 1fr)`;
        createGrid(dimension);
    } else {
        alert("Invalid input!");
    }
}

const button = document.querySelector(".clear-button");
button.addEventListener("click", clear);

createGrid(16); 