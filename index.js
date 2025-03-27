const gameContainer = document.querySelector('.game-container');
const gridSize = 16;

function createGrid () {
    gameContainer.style.display = "grid";
    gameContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    gameContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    gameContainer.style.gap = "1px";
    gameContainer.style.backgroundColor = "darkgray"
    gameContainer.style.border = "1px solid gray"
    gameContainer.style.height = "70vh";
    gameContainer.style.width = "70vw";
    
    for (let i = 0; i < gridSize * gridSize; i++){
        const cell = document.createElement("div");
        cell.style.boxSizing = "border-box";
        cell.style.backgroundColor = "lightgray";
        cell.addEventListener("mouseenter", () => {
            cell.style.opacity = "0.5";
        })
        cell.addEventListener("mouseleave", () => {
            cell.style.opacity = "1";
        })
        gameContainer.appendChild(cell);
    }
}
createGrid()