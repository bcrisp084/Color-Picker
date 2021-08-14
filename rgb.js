const button = document.querySelector(".button")
const color = document.querySelector(".color")

button.addEventListener("click", () => {
    color.textContent = getRGB();
    document.body.style.backgroundColor = getRGB()
})

function getRGB() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return "rgb(" + r + "," + g + "," + b + ")";
}

