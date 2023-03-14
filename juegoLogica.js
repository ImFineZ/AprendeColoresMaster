/**
 * Logica de color aleatorio para aprender
 */

// seleccionar el elemento HTML en el que se mostrará el color
const colorDisplay = document.getElementById('colorDisplay');
// Darle el nombre del color
const answerinput = document.getElementById("answer-input");
// Buton de nuevo color

//let lives = document.getElementById("lives")
//let lives = document.getElementById("mostrarVidas")

//colorDisplay.style.backgroundColor = "red";

// agrega un evento click al botón y llama a la función jugarJuego
//boton.addEventListener('click', jugarJuego);

const colorNames = {
    "rgb(255, 255, 255)": "Blanco",
    "rgb(192, 192, 192)": "Plateado",
    "rgb(128, 128, 128)": "Gris",
    "rgb(0, 0, 0)": "Negro",
    "rgb(255, 0, 0)": "Rojo",
    "rgb(128, 0, 0)": "Cafe",
    "rgb(255, 255, 0)": "Amarillo",
    "rgb(128, 128, 0)": "Oliva",
    "rgb(0, 255, 0)": "Lima",
    "rgb(0, 128, 0)": "Verde",
    "rgb(0, 255, 255)": "Celeste",
    "rgb(0, 128, 128)":"Verde Azulado",
    "rgb(0, 0, 255)": "Azul",
    "rgb(0, 0, 128)": "Azul Oscuro",
    "rgb(255, 0, 255)": "Fucsia",
    "rgb(128, 0, 128)": "Morado"
}

function generateRandomColor(){
    const index = Math.floor(Math.random() * Object.keys(colorNames).length);
    const colorName = Object.keys (colorNames)[index];
    const color = colorNames[colorName];
    return{name:color, value: colorName};
}

function updateColorDisplay(){
    const color = generateRandomColor();
    colorDisplay.style.backgroundColor = color.value;
    console.log(color.value);
    console.log(color.name);
    return{name:color.name,value:color.value};
}


let vidaContador = 3;

let currentColor = updateColorDisplay();

console.log(currentColor.name);
console.log(currentColor.value);
document.getElementById('inputvidas').innerHTML = vidaContador;

function checkAnswer(){
    const answerInput = document.getElementById("answer-input");
    const userAnswer = answerInput.value.toLowerCase();
    const correctAnswer = currentColor.name.toLowerCase();

    console.log(correctAnswer);
    if (userAnswer === correctAnswer) {
        alert("Respuesta Correcta!!!");
        currentColor = updateColorDisplay();
        answerInput.value = "";
    } else {
        console.log(correctAnswer);
        vidaContador--;
        document.getElementById('inputvidas').innerHTML = vidaContador;

        alert(`Respuesta incorrecta. Te quedan ${vidaContador} vidas.`);
        if (vidaContador === 0) {
            alert("Perdiste todas tus vidas.");
            vidaContador = 3;
            currentColor = updateColorDisplay();
            answerInput.value = "";
            window.location.href = "index.html";
        }
    }
}


const checkButton = document.getElementById("check-answer-button");
checkButton.addEventListener('click', checkAnswer);
