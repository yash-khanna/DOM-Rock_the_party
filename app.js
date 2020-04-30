//
function generateRandomNumber() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

console.log("Jai mata di");

function changeBackgroundColour() {
    let colorBg = document.getElementById('color-overlay');
    colorBg.style.backgroundColor = generateRandomNumber();
}

function changebgtext() {
    let textbg = document.getElementById("text-bg");
    if (textbg.innerHTML == "ON THE FLOOR BABY") {
        textbg.innerHTML = "HIT IT HARD BABY";
    } else if (textbg.innerHTML == "HIT IT HARD BABY") {
        textbg.innerHTML = "LETS ROCK";
    } else if (textbg.innerHTML == "LETS ROCK") {
        textbg.innerHTML = "ON THE FLOOR BABY";
    }
}

function checkBg() {
    generateRandomNumber();
    changeBackgroundColour();
    changebgtext();
}

setInterval(checkBg, 500);