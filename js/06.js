// Destructuring de 2 o más objetos

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

const cliente = {
    nombre: 'Juan',
    premium: true
}


/* Para hacer destructuring en dos objetos
nombras a la valariables de difernte manera,
ya que si se llaman igual, va a marcar error */
const { nombre: nombreProducto } = producto // Los dos puntos permiten renombrar hacia lado derecho un nuevo nombre a la variable
const { nombre: nombreCliente } = cliente

console.log(nombreProducto )
console.log(nombreCliente)

/* Es una técnica también muy útil, sobre todo cuando obtienes datos desde una API, 
desde un servidor, desde una REST API en el cual no puedes ir al servidor y modificarlo, 
porque la API ya está diseñada. Así tal vez no tienes control sobre esa API.
Puedes utilizar esta técnica para evitar colisión de nombres en las respuestas
de un servidor o en alguna librería. */