// Tipos de datos

// Undefined
let cliente;
console.log(typeof cliente) //typeof comprueba que tipo de dato tiene una variable

// Boolean
/* Los booleanos son valores que unicamento son true o false */
const descuento = true;
console.log(typeof descuento)

// Number
/* En JavaScript, todos los números, ya sean negativos, con decimales, enteros,
todos reciben el tipo de dato number */
const numero1 = 20.30 // No llevan comillas, ya que se reconocerían como tipo string
const numero2 = 30
const numero3 = -200
console.log(typeof numero1)
console.log(typeof numero2)
console.log(typeof numero3)

// String
/* El nombre de un cliente, el nombre de un producto, son ejemplos de cadenas de texto
y es probablemente el tipo de dato más común que se va a utilizar en JavaScript*/
const alumno = "Aldair"
let producto = "Monitor 29 pulgadas"
console.log(typeof alumno)
console.log(typeof producto)

// BigInt
/* Se ocupa BigInt para datos con presición muy grande */
const numeroGrande = BigInt (12218462154630645923132655)
console.log(typeof numeroGrande)

// No se puden sumar entre si, ya que hay un número grande
/*console.log( numero2 + numeroGrande ) */

// Para sumar una variable number y BigInt, se necesita hacer conversiones explicitas
console.log( numero2 + Number(numeroGrande))

// BigInt
/* No hay dos simbolos iguales*/
const primerSymbol = Symbol(1)
const segundoSymbol = Symbol(1)
console.log(primerSymbol === segundoSymbol)

// Object
/* Es el tema más importante de JavaScript */
const numeros = [1, 2, 3, 4]
const descuentos = null
const alumnos = {}
console.log(typeof numeros)
console.log(typeof descuentos)
console.log(typeof alumnos)