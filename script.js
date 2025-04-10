const container = document.querySelector("#container");

function createGrid(num) {
    for (let i = 0; i < num; i++) {
        let row = document.createElement("div");
        row.style.display = "flex";
        row.style.flex = "1";
        container.appendChild(row);

        for (let j = 0; j < num; j++) {
            let cell = document.createElement("div");
            cell.style.border = "1px solid black";
            cell.style.flex = "1";
            row.appendChild(cell);

            cell.addEventListener("mouseover", () => {
                if (!cell.style.backgroundColor) {
                    cell.style.backgroundColor = `hsl(${360 * Math.random()}, 50%, 50%)`;
                } else if (cell.style.backgroundColor === "black") {
                    cell.style.backgroundColor = "";
                } else {
                    cell.style.backgroundColor = "black";
                };
            });
        };
    };
};

createGrid(16);

const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    let gridSize;
    
    while (isNaN(gridSize) || gridSize > 100) {
        gridSize = prompt("Please enter your desired grid dimensions number (0-100): ");
    }
    
    container.replaceChildren();
    createGrid(gridSize);
});
