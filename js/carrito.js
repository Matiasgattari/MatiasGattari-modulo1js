let carrito = [{
    id: 1,
    nombre: "rubia",
    precio: 100,
    stock: 150
},
{
    id: 2,
    nombre: "negra",
    precio: 130,
    stock: 150
},
{
    id: 2,
    nombre: "roja",
    precio: 150,
    stock: 150
},
{
    id: 2,
    nombre: "honey",
    precio: 140,
    stock: 150
}
];

let carritoLleno = [];

let compra = prompt("seleccione el tipo de cerveza: 1=Rubia, 2=Negra, 3=Roja, 4=Honey");
let mensaje = "Gracias por su compra, podra ver los costos en el carrito"

while (compra === "1") {
let cantidad = prompt("Cuántas unidades queres?");
let resultado = carrito[0].precio * cantidad;
carritoLleno.push(resultado);
alert(resultado);
let pregunta2 = prompt("queres comrpar otra cerveza?, responde con si o no")
if (pregunta2 === "si") {
    compra =prompt("seleccione el tipo de cerveza: 1=Rubia, 2=Negra, 3=Roja, 4=Honey");
}else {alert("gracias por tu compra, podras ver el costo en tu carrito de compras"); break}
}
while (compra === "2") {
cantidad = prompt("Cuántas unidades queres?");
let resultado1 = carrito[1].precio * cantidad;
carritoLleno.push(resultado1);
alert(resultado1);
let pregunta2 = prompt("queres comrpar otra cerveza?, responde con si o no")
if (pregunta2 === "si") {
    compra =prompt("seleccione el tipo de cerveza: 1=Rubia, 2=Negra, 3=Roja, 4=Honey");
}else {alert("gracias por tu compra, podras ver el costo en tu carrito de compras"); break}
}
while (compra === "3") {
cantidad = prompt("Cuántas unidades queres?");
let resultado2 = carrito[2].precio * cantidad;
carritoLleno.push(resultado2);
alert(resultado2);
let pregunta2 = prompt("queres comrpar otra cerveza?, responde con si o no")
if (pregunta2 === "si") {
    compra =prompt("seleccione el tipo de cerveza: 1=Rubia, 2=Negra, 3=Roja, 4=Honey");
}else {alert("gracias por tu compra, podras ver el costo en tu carrito de compras"); break}
}
while (compra === "4") {
cantidad = prompt("Cuántas unidades queres?");
let resultado3 = carrito[3].precio * cantidad;
carritoLleno.push(resultado3);
alert(resultado3);
let pregunta2 = prompt("queres comrpar otra cerveza?, responde con si o no")
if (pregunta2 === "si") {
    compra =prompt("seleccione el tipo de cerveza: 1=Rubia, 2=Negra, 3=Roja, 4=Honey");
}else {alert("gracias por tu compra, podras ver el costo en tu carrito de compras"); break}
}

// este mensaje no funciona como deberia. No puedo identificar que producto se compro con ese costo ya que en el array se guardan por orden de ingreso y solo guardo numeros.
// alert (`Cerveza rubia: $ ${carritoLleno[0]}, Cerveza negra: $ ${carritoLleno[1]}, Cerveza roja: $ ${carritoLleno[2]}, Cerveza Honey: $ ${carritoLleno[3]}`)

let total = 0;
let totalCompra = carritoLleno.reduce((a, b) => a + b, 0);

alert(`Total de la compra = $ ${totalCompra}, muchas gracias`)






// METODOS DE BUSQUEDA Y FILTRADO
// let valor = 140;
// let tipo = "rubia";
// let valor = prompt("ingrese un valor minimo")
// let tipo = prompt("ingrese tipo de cerveza")
// let filtrados = carrito.filter(elemento => elemento.precio > valor);
// let filtrados2 = carrito.filter(elemento => elemento.nombre === tipo);
// console.log(filtrados);
// console.log(filtrados2);