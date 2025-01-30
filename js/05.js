// Manipulacion de objetos
const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}// Dentro de estas llaves va estar lo que pertenece al objeto


/* Importante */
/* Fuera del objeto puedes reescribir un valor  o añdadir un valor extra*/
// Reescribir un valor
producto.nombre = "Monitor Curvo"
console.log(producto)
/* El const evitaba que se pudiera reasignar su valor, pero en el caso de los objetos
const funciona diferente, porque en realidad la varible es nombre */
/* Esto hace que los objetos sean más dinámicos para poder cambiar sus 
valores o agregar nuevas propiedades o eliminarlas a futuro */

// Añadir un valor 
producto.imagen = "imagen.jpg" // En este caso, imagen no existe
/* Lo que hace esto, es aregar este valor al objeto */

// Eliminar un valor
delete producto.disponible // propiedad a eliminar 

// Técnica moderna para eliminar un valor aplicando destructuring
const { disponible, precio, ...producto2 } = producto // los 3 puntos se le conoce como spread operator
console.log(producto2)
/* El spread operator tiene muchos usos en JavaScript, entre ellos 
hacer esto que acabamos de hacer, sacar elementos de un objeto o 
también agregar elementos hacia un arreglo */

// Metodos de objeto para comportamiento de const en un obeto
// Object.freeze(producto) // mantiene el objeto como lo hemos declarado y no lo podemos modificar
// Object.seal(producto) // permite cambiar sus pero no permite agregar, ni eliminar propiedades