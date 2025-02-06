/* Manipulacion de arreglos */

/*Algo que tienen los arreglos es que usualmente inician de una forma y 
conforme se va ejecutando nuestra aplicación van cambiando*/
const tecnologias = ['Vue.js', 'JavaScript', 'Node.js', 'HTML', 'CSS']
/*Puede ser que inicie como un arreglo vacío. Descargamos una lista de
clientes y se llena. Puede ser que sea un carrito de compras que inicia 
vacío. El usuario comienza a agregar elementos, algunos los quita, otros
 los actualiza, realiza su compra y entonces el carrito vuelve a estar vacío*/

/*Añadir elementos a un arreglo con mutable*/
tecnologias.push('Git') // .push() añade elementos al final del arreglo
tecnologias.unshift('GitHub') // .unshif() añade elementos al inicio del arreglo
/*En programación existe un término llamdado inmutable o mutable y en este caso
lo que hacen .unshift() y .push(), es mutar el arreglo original*/

/*Añadir elementos a un arreglo sin mutable*/
/*Se utiliza el spread operator.*/
const nuevoArreglo = [...tecnologias, 'GitLab'] // se pone el spread operator
console.log(nuevoArreglo);
/* Se utiliza el spread operator para crear la copia de un arreglo Nota como esos 
tres puntos anteriormente los utilizamos para otra cosa y ahora son para una copia 
del arreglo. Entonces se le conoce como spread operator y realiza diferentes acciones 
dependiendo del ámbito donde se esté ejecutando.
Anteriormente lo utilizamos para sacar ciertos elementos de un objeto y tomar una copia 
de lo que no habíamos aplicado destructuring pero en este caso lo que hace es tomar una 
copia de tecnologías, es decir, es como si fuera y copiara esto y lo colocara aquí. */

/* Eliminar elementos de un arreglo */
// tecnologias.pop() // elimina elementos del final del arreglo
// tecnologias.shift() // Elimina elementoos del inicio del arreglo
// tecnologias.splice(0,1) // Elimina elementos según su posicion en el arreglo

const tecnologias2 = tecnologias.filter( function(tech) {
    return tech !== 'HTML'
})


console.log(tecnologias2)