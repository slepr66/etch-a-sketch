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
        };
    };
};

createGrid(16)