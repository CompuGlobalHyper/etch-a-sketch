const container = document.querySelector("div.container")

for (let i = 0; i < 16; i++){
    let flexDiv = document.createElement("div")
    flexDiv.classList.add("flexdiv")
    container.appendChild(flexDiv)
    for (let j = 0; j < 16; j++){
        let div = document.createElement("div")
        div.classList.add("pixel")
        div.textContent = `${j}`
        flexDiv.appendChild(div)
    }
}