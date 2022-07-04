let cerveza = prompt("Qué cerveza queres?").toLocaleLowerCase();
let cantidad = parseInt(prompt("Cuántas unidades??"));

switch (cerveza) {
    case "rubia":
        let resultado = 120 * cantidad;
        let mensaje = `Son $ ${resultado}, gracias por su compra :D`
        alert(mensaje);
        break;
    case "roja":
        let resultado1 = 140 * cantidad;
        let mensaje1 = `Son $ ${resultado1}, gracias por su compra :D`
        alert(mensaje1);
        break;
    case "negra":
        let resultado2 = 130 * cantidad;
        let mensaje2 = `Son $ ${resultado2}, gracias por su compra :D`
        alert(mensaje2);
        break;
    case "honey":
        let resultado3 = 150 * cantidad;
        let mensaje3 = `Son $ ${resultado3}, gracias por su compra :D`
        alert(mensaje3);
        break;
    default:
        alert("No vendemos esa cerveza...");
        break;
}





// FUNCION CONSTRUCTORA con funcion de venta para ir descontando stock en base a "cantidad" comprada. 

// class Producto {
//     constructor(nombre, precio, volumen, stock) {
//         this.nombre = nombre;
//         this.precio = precio;
//         this.volumen = volumen;
//         this.stock = stock;
//     }
//     vender() {
//         if (this.stock != 0) {
//             console.log("Con stock, procede venta");
//             this.stock = this.stock - cantidad;
//         } else {
//             console.log("SIN STOCK. venta detenida");
//         }
//     }
// }


// const producto1 = new Producto("rubia", 120, "375ml", 25);
// const producto2 = new Producto("negra", 130, "375lm", 15);
// const producto3 = new Producto("roja", 140, "500ml", 20);
// const producto4 = new Producto("honey", 150, "250ml", 35);



// ejemplo de como se iria ejecutando todo en consola para ver la baja de stock y si se puede o no vender 

// console.log(`Stock: ${producto1.stock}`);
// console.log(producto1);
// producto1.vender();
// console.log(" ");

// console.log(`Stock: ${producto1.stock}`);
// console.log(producto1);
// producto1.vender();
// console.log(" ");

// console.log(`Stock: ${producto1.stock}`);
// console.log(producto1);
// producto1.vender();
// console.log(" ");

// console.log(`Stock: ${producto1.stock}`);
// console.log(producto1);
// producto1.vender();
