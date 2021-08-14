const button = document.querySelector(".button");
const color = document.querySelector(".color")
const colors = ["green", "blue", "rgba(133, 122, 200", "#f15025"]

button.addEventListener("click", () => {
    console.log(document.body)
    const randomNumber = getRandomNumber()
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}