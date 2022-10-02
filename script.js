const container = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
}

let divs = document.querySelectorAll(".square");

divs.forEach((div) => {
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = 'black';
    })
});

function createGrid() {
    let squares = parseInt(prompt("How many square per side?"));
    container.textContent = "";


    while (squares > 100 || squares < 0 || !Number.isInteger(squares)) {
        squares = parseInt(prompt("YOu must enter a a positive number"));

    }

    
for (let i = 0; i < squares * squares; i++) {
    let div = document.createElement("div");
    let side = `${608 / squares}`;
    div.style.height = `${side}px`;
    div.style.width = `${side}px`;
    container.appendChild(div);
}
}



const button = document.querySelector('#btn');
button.addEventListener('click', createGrid);
