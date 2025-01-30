// Objetos

/* En JavaScript, los objetos son una colección de propiedades y cada
propiedad es una asociación entre un nombre y una clave*/
const producto = {
    nombre: "tablet", // Propiedad de un objeto
    precio: 300, // Se pueden añadir más valores al objeto
    disponible: true,
} // Dentro de estas llaves va estar lo que pertenece al objeto
console.log(producto)
/* Importante */
/* Fuera del objeto puedes elimnarle ciertos valores o añadirle extras */

/* Cuando se trabaje con arreglos y productos, es muy útil utilizar
console.table() en vez de console.log() */
console.table(producto) 

/* Para acceder a los valores del obejto mediante la sintaxis de punto */
console.log(producto.nombre)

/* Tambien se puede de esta forma: [''] */
console.log(producto['precio'])
/* Esta sintaxis no es muy común, pero en algunos casos es muy útil para
para trabajar con objetos*/

// Destructuring
/* Otra forma es mediante la sintaxis de Destructuring */
/* Destructuring es sacar los valores de la estructura */
//const {nombre} = producto;
//console.log(nombre)
/*Esto genera una variable con todo y su valor del objeto sobre el cual
estás aplicándole ese destructuring*/

/* Si le aplico Destructuring a algo que no existe */
const {descuento} = producto;
console.log(descuento)
/*Esto genera una variable undefined, lo cual no tiende ningún valor */
/* Las caractísticas de los const no aplican tanto en los objetos */

/* No es obligación que apliques destructuring a todo,
solamente a lo que requieras y separados por coma */
const { nombre, precio, disponible } = producto
console.log(nombre)
console.log(disponible)

// Object literal enhacement
/* Es lo contrario de destructuring */
/* Retorna el valor de una variable a un objeto */
const autenticado = true
const usuario = "Juan"

const nuevoObjeto = {
    autenticado,
    user : usuario
}
console.log(nuevoObjeto)