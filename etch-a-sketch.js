function createGrid(gridSize) {
    const container = document.querySelector(".container")

    for(let i = 0; i < gridSize; i++) {
        const row = document.createElement("div")
        row.classList.add("row")
        container.appendChild(row)

        for(let j = 0; j < gridSize; j++) {
            const col = document.createElement("div")
            col.classList.add("col")
            col.style.opacity = 1;
            col.addEventListener("mouseover", event => {
                if(col.style.backgroundColor) {
                    col.style.opacity -= 0.1;
                } else {
                    col.style.backgroundColor = `rgb(
                        ${Math.random() * 256}, 
                        ${Math.random() * 256}, 
                        ${Math.random() * 256}
                    )`
                }
            })
            row.appendChild(col)
        }
    }
}

function deleteGrid() {
    const container = document.querySelector(".container")
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    // or container.innerHTML = ""
}

const changeGridButton = document.querySelector(".change-grid-button")
changeGridButton.addEventListener("click", event => {
    const gridSize = parseInt(prompt("New grid size (1-100):", "16"))
    if(isNaN(gridSize)) {
        alert("Grid size is not a number.")
    } else if(gridSize < 1 || gridSize > 100) {
        alert("Grid size is not a number must be between 1 and 100.")
    } else {
        deleteGrid()
        createGrid(gridSize)
    }
})

createGrid(16)