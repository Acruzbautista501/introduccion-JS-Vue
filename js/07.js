
const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}

// Unir dos objetos con Object.assing
const nuevoObjeto1 = Object.assign(cliente, producto)
console.log(nuevoObjeto1)
/* Cuando se recarga en el navegador puedes ver que estamos escribiendo 
obre cliente y como este nombre y este son iguales, estamos escribiendo sobre cliente.
Escribimos todo el objeto de producto y reescribe este nombre. 
Entonces puedes ver que aparece nombre tablet.*/
/* Algunas veces esto te va a ser muy útil, sobre todo para reiniciar un objeto.
Pero si quieres mantener los dos objetos con sus datos probablemente no sea la mejor */

// Unir dos objetos escribiendolos en un nuevo objeto
const nuevoObjeto = {
    producto,
    cliente
}
console.log(nuevoObjeto)
/* Cuando se recarga en el navegador puedes ver que tenemos un objeto que tendría esos dos objetos.
Entonces, a veces la técnica más simple pues puede ser algo que puedas utilizar. */
/* Esto también es útil en caso de que tengas una respuesta de una API, otra respuesta de 
otra API y quieras entregar un solo objeto de regreso hacia hacia donde la quieres renderizar 
puedes utilizar esta técnica, también porque usualmente cuando tienes una función, tienes 
un return, solamente puedes retornar un valor, pero si retornas un objeto puedes retornar múltiples.*/

