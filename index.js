// Ejercicios
/*
Calculadora de edad:
Escribe un programa que solicite al usuario su
año de nacimiento y luego calcule su edad actual y la muestre en pantalla.
*/

// entradas
/* var anioNacimiento = parseInt(prompt("Por favor, ingresa tu año de nacimiento"))

// proceso
var edadActual =  2024 - parseInt(anioNacimiento)

// salida
alert("La edad del usuario es:"+ edadActual) */

/*
Calculadora de IMC (Índice de Masa Corporal):
Pide al usuario su peso y su altura, luego calcula su IMC y muestra el resultado.
javascript
*/

// entrada
/* var peso = prompt("Ingresa tu peso por favor: ")
var altura = prompt("Dame ahora tu altura por favor: ") */

// proceso
/* var pesoNum = parseInt(peso)
var alturaNum = parseInt(altura) */

//calculo IMC
/* var imc = pesoNum / (alturaNum = alturaNum) */

// salida
/* alert("Tu imc es:" +imc) */

/*
Conversión de temperaturas:
Solicita al usuario una temperatura en grados Celsius 
y conviértela a Fahrenheit utilizando la fórmula: F = C * 9/5 + 32.
*/

// entrada
/* var celsius = prompt("Dame una temperatura (en Celsius)")

// convertir de string a number
var celsiusNum = parseInt(celsius)

//proceso

var fahrenheit = (celsiusNum * 9/5) + 32

// salida
alert("Los grados celsius de:"+ celsius + " en fahrenheit son:" +fahrenheit)

// concatenación 
var string1 = "Blanca"
var string2 = "Benitez"

var concatenacionDeString1String2 = string1 + string2

console.log(concatenacionDeString1String2) */


//Ejercicios 16/05/2024
/* 1-Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), 
en caso de contestar sí, responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.*/

//entrada
/* var usuario = prompt("¿Eres bellimos/a?")

//Proceso 
if (usuario == "si") {
    console.log("Ciertamente")
} else if (usuario == "no") {
    console.log("No te creo")
} */


/* 2-Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm
*/
//entrada
/* var usuario = prompt("Puedes darme un numero por favor: ")
var usuarioNum = parseInt(usuario)

//Proceso
if (usuarioNum % 2 == 0) {
    alert(usuarioNum +" numero es divisible entre 2")
} else {
    alert(usuarioNum +"El numero no es divisible entre 2")
} */

/*3-Crear un programa que determine si un número introducido en un Prompt es par o no, 
la respuesta será mostrada en un Alert.
*/
//Proceso 
/* var par = prompt("Introduce un número")
var parNum = parseInt(par) 

//Proceso 
if (parNum % 2 == 0) {
    alert(parNum + " Es un numero par")
} else {
    alert(parNum + " El numero no es par")
}
 */
/*
4-Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", 
en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
*/
//Entradas
/* var usuario = prompt("Ingresa un numero")
var usuarioNum = parseInt(usuario)

//Proceso
if (usuarioNum == 1000) {
    alert(usuarioNum + " Ganaste un premio")
}
    else {
        alert(usuarioNum + " Lo sentimos, sigue participando")
    } */

/*
5-Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. 
No considerar el caso en que ambos números son iguales.
*/
//Entradas
 
/* var num1 = prompt("Ingresa el primer numero: ")
var num2 = prompt("Ingresa el segundo numero: ")

var num1Num = parseInt(num1)
var num2Num = parseInt(num2)

//Proceso
if (num1Num > num2Num) {
    alert(num1Num + " Es mayor")
} else if (num1Num < num2Num)
    alert(num2Num + " es mayor") */

/*6-Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. 
Considerar el caso en que 2 números sean iguales.
*/
//Entradas
/* var num1 = prompt("Ingresa el primer numero: ")
var num2 = prompt("Ingresa el segundo numero: ")
var num3 = prompt("Infrese el tercer numero: ")

//Cambio de string a numero
var num1Num = parseInt(num1)
var num2Num = parseInt(num2)
var num3Num = parseInt(num3)

//Proceso
if (num1Num > num2Num) {
    t = num1Num;
} else {
    t = num2Num;
}
if (t > num3Num) {
    mayor = t;
} else {
    mayor = num3Num;
}

console.log("El mayor es " + mayor); */

/* 7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, 
otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. 
Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
 */
//Entrada
/* var dia = prompt("Ingresa el día de la semana: ")

if (dia === "Lunes") {
    alert('Hoy es lunes');
 } else if (dia === "Viernes") {
    alert('Hoy es Viernes');
 } else if (dia === "Sábado") {
    alert('Hoy Sábado');
 } else if (dia === "Domingo") {
    alert('Hoy es domingo');
 }
     */
