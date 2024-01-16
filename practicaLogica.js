// User profile
//Write a program that prompts a user for their data: username, age, and a list of their favorite movies.
//Store the information and then showcase it in the console. 
//Take note that the output for the films should add a small message
//like: 'The film {film} is one of my favorites'.

let nombreUsuario = prompt("¿Cuál es tu nombre?");
console.log("Nombre de Usuario: " + nombreUsuario);

let edadUsuario = prompt("¿Cuál es tu edad?");
console.log("Edad: " + edadUsuario);

let peliculasFavoritas = prompt("¿Cuales son tus peliculas favoritas?");
console.log("Sus peliculas favoritas: " + peliculasFavoritas);

let peliculasArr = peliculasFavoritas.split(",");

console.log("¡" + peliculasArr[0] + " es una de mis favoritas!");


// Highest number
//Write a program that asks for 10 numbers. 
//Using logical operators and any other javascript functions/structures you've seen before, 
//determine and output the highest of those numbers.

let numerosUsuario = prompt("Ingresa 10 numeros: ");

let numerosArr = numerosUsuario.split(",");

let numeroMayor = Math.max(...numerosArr);

console.log("El numero de mayor valor es: " + numeroMayor);



// Alarm
//Write a program that asks a user for the amount of seconds needed until an alarm (message)
//is executed alongside a text to show once those seconds have passed in real time.
// Result example: "Time for bed after 10 seconds".


let segundosAlarma = prompt("Segundos necesarios hasta la alarma: ");

//sacar los milisegudos
//entonces debo convertir segundosAlarma a un dato int porque es un string , us parseInt para volverlo un int
let segundosAlarmaint = parseInt(segundosAlarma);
//ahora multiplico *1000(1s = 1000ms) y obtengo el numero de milisegundos (miliAlarma) 
let miliAlarma = segundosAlarmaint * 1000
//hago una funcion que hara que salte el mensaje
function mensajeAlarma() {
    alert("Time for bed after: " + segundosAlarma + "seconds");
}
//Salta mensaje
setTimeout(mensajeAlarma, miliAlarma);




// Palindrome
// Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation).
// Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.


let fraseUsuario = prompt("Ingrese una palabra o frase: ");

let fraseProcesada = fraseUsuario.replace(/[^\w\sáéíóúÁÉÍÓÚ]/g, "").toLowerCase();

function esPalindromo (fraseProcesada) {
    let fraseInvertida = fraseProcesada.split("").reverse().join("");
    return fraseProcesada === fraseInvertida
}

if (esPalindromo(fraseProcesada)) {
    console.log("La frase es un palindromo")
    
} else {
    console.log("La frase no es un palindromo")
}




// Factorial
// Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.

function Factorial (n) {
    if (n === 1) {
        return 1;
    } else {
        return n * Factorial (n-1);
    }
}

    let numero = prompt("Ingrese un numero entero (mayor o igual a 1): ");
    let resultado = Factorial (numero);
    console.log("El factorial de " + numero + " es " + resultado);

// Flat array
// Write a program that takes the following nested matrix and flattens it (makes it a 1D array). 
//Use any type of algorithm you want like callbacks, recursion, etc...

// let multiDimension = [1, [2, 3, [4, 5, [6]]]];
 