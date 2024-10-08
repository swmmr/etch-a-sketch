const container = document.querySelector(".container");
const button = document.querySelector(".set-grid");

function createGrid(size) {
    container.innerHTML = "";
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-item");
        div.style.width = `${640 / size}px`;
        div.style.height = `${640 / size}px`;
        
        let currOpacity = 0;

        div.addEventListener("mouseover", () => {
            if (currOpacity < 1) {
                currOpacity += 0.1;
            }
            div.style.backgroundColor = `rgba(0, 0, 0, ${currOpacity})`;
        })
        container.appendChild(div);
    }
}

button.addEventListener("click", () => {
    let size = prompt("Enter a number between 1-100 for new grid:");
    size = parseInt(size);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("invalid input, please try again");
    }
    else {
        createGrid(size);
    }
});