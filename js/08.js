// Template Strings o Concatenación

// Concatenación con dos variables diferentes
const cliente = "Juan"
const saldo = 400
/* Esas variables pueden ser de un formulario o de una consulta a la base de datos 
desde una API, etcétera, pero una vez que lo obtienes, quieres mostrarlo y quieres 
mostrarlo de forma que sea fácil de leer, que se entienda. */

console.log('El Cliente : ' + cliente + ' tiene un saldo de : ' + saldo )
/* En versiones anteriores se colocaba el string más un signo de más y después colocabas cliente.
Esta sintaxis aún se utiliza y sobre todo es útil cuando tienes una sola variable, pero si tienes 
múltiples se hace un desorden porque tienes algo así como más y después otro string tiene un 
saldo de otros dos puntos, otro signo de más y aquí le colocas saldo. Nota lo difícil que es 
de leer esto, Ya cuando tienes dos variables se hace muy complicado */

console.log('El Cliente : ', cliente , ' tiene un saldo de : ' , saldo )
/* Otra forma de concatenar, también muy común, es que en lugar de este más Aquí tenemos una coma.
Aquí otra coma. Y aquí otra coma. Ese nos da el resultado, igual que vimos anteriormente. Entonces 
es una sintaxis que, de nuevo, si fuera hasta aquí, digamos, sería sencillo, porque tienes un un string 
y después tienes la variable. Pero cuando ya comienzas a mezclar múltiples strings, múltiples variables, 
se hace difícil. */

// Template Strings 
console.log(`El Cliente : ${cliente} tiene un saldo de: ${saldo}`)
/* Otra forma de concatenar, con Template Strings, en lugar de estar cerrando y agregando los más.
Aquí colocas un signo de dólar, abres llaves y colocas la variable aquí, Cliente tiene un saldo de dos
puntos y aquí inyectamos el saldo. Nota La sintaxis un poco más limpia que esta otra sin preocuparte de 
tener que cerrar o agregar estas comillas. Finalizar el string, agregar el signo de más. 
No te preocupas por nada de eso, solamente agregas esta sintaxis donde quieras inyectar tus variables
y puedes ver que el resultado es exactamente el mismo. */

// Template Strings con objeto
const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
}

console.log(`El Producto: ${producto.nombre}, tiene un precio de: ${producto.precio}`)