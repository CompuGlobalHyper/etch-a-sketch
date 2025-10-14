const container = document.querySelector("div.container")
let button = document.createElement("button")
button.textContent = "Reset and choose the size of the grid (min. 2, max. 100)"
container.appendChild(button)
let size = 0

for (let i = 0; i < (size ? size : 16); i++){
    let flexDiv = document.createElement("div")
    flexDiv.classList.add("flexdiv")
    container.appendChild(flexDiv)
    for (let j = 0; j < (size ? size : 16); j++){
        let div = document.createElement("div")
        div.classList.add("pixel")
        flexDiv.appendChild(div)
    }
}
let pixels = document.querySelectorAll("div.pixel")
pixels.forEach(pixel => {
    pixel.addEventListener('mouseenter', () =>{
        let red = Math.floor(Math.random() * 256)
        let green = Math.floor(Math.random() * 256)
        let blue = Math.floor(Math.random() * 256)
        pixel.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    })
})

button.addEventListener('click', () => {
    size = prompt("Enter size")
    let flexDivs = document.querySelectorAll("div.flexdiv")
    flexDivs.forEach(flexDiv => {
        container.removeChild(flexDiv)
    })

    for (let i = 0; i < (size ? size : 16); i++){
        let flexDiv = document.createElement("div")
        flexDiv.classList.add("flexdiv")
        container.appendChild(flexDiv)
        for (let j = 0; j < (size ? size : 16); j++){
            let div = document.createElement("div")
            div.classList.add("pixel")
            flexDiv.appendChild(div)
        }
    }
    let pixels = document.querySelectorAll("div.pixel")
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseenter', () =>{
            let red = Math.floor(Math.random() * 256)
            let green = Math.floor(Math.random() * 256)
            let blue = Math.floor(Math.random() * 256)
            pixel.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        })
    })
})
