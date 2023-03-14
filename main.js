function jugar(){
    window.location.href = "juego.html";
}
/**
 * Efecto maquina de escribir en el titulo
*/
document.addEventListener("DOMContentLoaded", function(event){

    const titulo = document.getElementById('titulo-pagina');
    const texto = titulo.textContent;
    
    titulo.innerText = '';
    for( let i = 0; i < texto.length; i++){
        titulo.innerHTML += '<span>' + texto.charAt(i) + '</span>';
    }
    
    let caracterActual = 0;
    let duracionAnimacion = 2000;
    
    function escribirLetra(){
        const span = titulo.querySelectorAll('span')[caracterActual];
        span.classList.add('animacion-escribir');
        caracterActual++;
        if(caracterActual === texto.length){
            terminarAnimacion();
            return;
        }
        setTimeout(escribirLetra,duracionAnimacion/texto.length);
    }
    
    function terminarAnimacion(){
        titulo.classList.remove('maquina-escribir');
        const spans = titulo.querySelectorAll('span');
        for(let i = 0; i < spans.length; i++){
            spans[i].classList.remove('animacion-escribir');
        }
    }
    titulo.classList.add('maquina-escribir');
    escribirLetra();
});
/**
 * Logica de color aleatorio para aprender
 */

// seleccionar el elemento HTML en el que se mostrará el color
const colorDisplay = document.getElementById('colorDisplay');
// Darle el nombre del color
const colorNameInput = document.getElementById("colorName");
// Buton de nuevo color


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
    colorNameInput.value = color.name;
}

updateColorDisplay();

const newColorButton = document.getElementById("color-button");
newColorButton.addEventListener('click', updateColorDisplay);


// generar un color aleatorio
/*
function generateRandomColor(){
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }
    return color
}
*/

/*

// asignar el color generado al elemento HTML seleccionado
colorDisplay.style.backgroundColor = generateRandomColor();

// seleccionar los elementos HTML de las opciones de respuesta
const colorOptions = document.querySelectorAll(".color-option");

// asignar colores aleatorios a las opciones de respuesta
colorOptions.forEach((option) => {
    option.style.backgroudColor = generateRandomColor();
});

// asignar el color correcto a una de las opciones de respuesta de manera aleatoria
const correctColorIndex = Math.floor(Math.random()*colorOptions.length);
colorOptions[correctColorIndex].style.backgroudColor = colorDisplay.style.backgroudColor;

// agregar un evento click a cada opción de respuesta
colorOptions.forEach((option)=>{
    option.addEventListener("click", ()=>
    {
        // verificar si la opción seleccionada por el usuario es la correcta
        if(option === colorOptions[correctColorIndex]){
            alert("¡¡Correcto!!");
        }else{
            alert("Inconrrecto :(");
        }
    });
});
*/