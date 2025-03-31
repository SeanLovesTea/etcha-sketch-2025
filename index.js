const gameContainer = document.querySelector('.game-container');
const defaultGridSize = 16;
let newGridSize = 0;
//color choices "grey", "rainbow", "shading";
let color = 'erase';
let cellAlpha = "1";


function getGridSize (){
    gameContainer.innerHTML = "";
    do {
        newGridSize = prompt("Choose new grid size");
        if (isNaN(newGridSize) || newGridSize === "") {
            alert("Please choose a valid number")
        }
    } while (isNaN(newGridSize) || newGridSize === "");
    newGridSize = Number(newGridSize);
    createGrid (newGridSize)
}
function clearGrid () {
    gameContainer.innerHTML = "";
    if (newGridSize == 0) {
        createGrid (defaultGridSize)
    } else createGrid (newGridSize);
    
}

function createGrid (size) {
    gameContainer.style.display = "grid";
    gameContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gameContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    gameContainer.style.border = "1px solid darkgray"
    gameContainer.style.height = "70vh";
    gameContainer.style.width = "70vw";
    
    for (let i = 0; i < size * size; i++){
        const cell = document.createElement("div");
        cell.style.border = "1px solid darkgray"
        cell.style.backgroundColor = "rgba(235, 235, 235,1)";
        cell.dataset.alpha = "1";
        cell.addEventListener("mouseenter", () => {
            switch(color){
                case "grey":
                    cell.style.backgroundColor = `rgba(51,51,51,1)`;
                    break;
                case "rainbow":
                    cell.style.backgroundColor =  `rgba(${randomNumRGB ()},${randomNumRGB ()},${randomNumRGB ()}, ${cell.dataset.alpha})`;
                    break;
                case "erase":
                    cell.style.backgroundColor = `rgba(235, 235, 235,1)`;
                    cell.dataset.alpha = "1";
                    break;
                case 'shade':
                    console.log("inside cell", cell.style.backgroundColor)
                    let rgbArr = cell.style.backgroundColor.replace(/[^\d,.]/g, "").split(",");
                    let r  = rgbArr[0];
                    let g  = rgbArr[1];
                    let b  = rgbArr[2];
                    let alpha = rgbArr.length === 4? parseFloat(rgbArr[3]) : 1;
                    
                    if (alpha <= 0.1) {
                        alpha = 1;
                    } else alpha -= .1;
                    cell.dataset.alpha = alpha;
                    cell.style.backgroundColor = `rgba(${r},${g},${b},${cell.dataset.alpha})`
                    console.log(cell.style.backgroundColor)
            }
        })
        gameContainer.appendChild(cell);
    }
}

function setColor (newColor) {
    color = newColor;
}
function randomNumRGB () {
    return Math.floor(Math.random() * 256)
}
function generateNewGrid () {
    if (newGridSize == 0) {
        createGrid (defaultGridSize)
    } else createGrid (newGridSize)
}
createGrid(defaultGridSize)