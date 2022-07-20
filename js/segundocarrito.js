// primero que nada debo colocar todos los botones de "añadir al carrito" en el mismo array

const botonAgregarCompra = document.querySelectorAll('.agregarCarrito');

// Luego debemos pasarle un forEach, para que cada vez que lea el codigo haga algo. Usar nombres lo mas claros posibles "addToCartButton"

// addToShippingCartButtons.forEach(addToCartButton => {
//     addToCartButton.addEventListener("click", () => console.log("click"))
// });

// en el caso anterior, el addEventListener del boton "addToCartButoton" lo que hace es hacer un console.log que diga click, solo para confirmar funcionalidad
// Este mismo console.log debe ser reemplazado por una funcion que haga lo que yo quiero

botonAgregarCompra.forEach((agregarCarrito) => {
    agregarCarrito.addEventListener('click', agregarAlCarrito);
});

// esta variable la creo cuando estoy haciendo la funcion addItemToShoppingCart, pero al ser  global debo dejarla por fuera
const agregoCarrito = document.querySelector(
    '.shoppingCartItemsContainer'
);

// en este const arregloCarrito voy a ir cargando los valores de los elementos del carrito
const arregloCarrito = [];

// creo array para ir pusheando los precios de los objetos, poder hacerles luego un reduce
const arregloCarritoVacio = [];


// creo la funcion para añadir al carrito al clickear (recordar el parametro sera "event" o "e")

function agregarAlCarrito(event) {
    // en este caso lo primero que quiero hacer es capturar el target de este evento
    const button = event.target;
    // console.log(button);
    // Ahora habiendo capturado el boton completo del item que quiero traer al carrito, debo hacer que en realidad TODA la informacion de ese producto me aparezca en el. Para eso se debe crear una nueva variable "item" que represente cada item del carrito, y con el comando .closest(`.item`) lo que hago es seleccionar todo el elemento mas cercano con la clase ".item" al boton. Al estar el boton dentro de una tarjeta junto con el contenedor de clase "item" este sera seleccionado

    const item = button.closest('.item');
    //    console.log(item)

    // Ahora lo que queremos hacer es que del item completo (div contenedor) solo me muestre el titulo del producto. Y como esto me va a mostrar todo el codigo de la linea del titulo, le agrego al querySelector   el .textContent, para que solo se me muestr el TEXTO del elemento y no el codigo
    const itemTitulo = item.querySelector('.item-title').textContent;
    // console.log(itemTitulo);

    // obtenido ya el nombre del producto, debo hacer exactamente lo mismo con el precio. Basicamente tomo el ITEM que es el div, y creo la variable "itemPrecio" a la cual hago que me muestre el texto contenido en el elemento con la clase ".item-Price"
    const itemPrecio = item.querySelector('.item-price').textContent;
    // console.log(itemPrecio);

    // Para agregarle la imagen tambien al carrito - opcional - hago el mismo paso que antes pero con la imagen. Como la imagen no contiene texto, utilizo el atributo .src en lugar del textcontent. Se me va a mostrar donde esta guardada la imagen

    const itemImagen = item.querySelector('.item-image').src;
    // console.log(itemImagen);


    // Habiendo ahora separado los 3 items del div que quiero que se me carguen al carrito de compras, vamos a tener que crear una nueva funcion dentro de este forEach que lo que haga es ir agregando los items al carrito. A la misma se le pasan los 3 parametros que obtuve recien. En este caso, la funcion "addItemToShoppingCart" se va a ejecutar con estos 3 parametros cada vez que se haga click en el boton añadir carrito
    agregarElementosCarrito(itemTitulo, itemPrecio, itemImagen);


};

// habiendo creado ya el forEach que va a recorrer el arreglo, debemos crear ahora la funcion que ira añadiendo los items al carrito "addItemToShoppingCart", la cual se esta ejecutando dentro del forEach, pero se la crea afuera. A la misma le tenemos que dar como parametros los 3 creados entes, titulo precio e imagen
function agregarElementosCarrito(itemTitulo, itemPrecio, itemImagen) {
    // console.log(itemTitulo, itemPrecio, itemImagen);

    // Con esta funcion, vamos a crear los elementos que queremos dentro del carrito. este div lo voy a estar creando en una variable, la misma se llama row porque lo quiero ordenar en una fila
     const shoppingCartRow = document.createElement("div");

    //    creado el div, tengo que pensar en donde lo voy a querer poner dentro del html. Tenemos creado una seccion que es del carrito de compras (debajo de las tarjetas). dentro de esta seccion tengo un div padre junto con la clase "shoppingCartItemsContainer". Este es el contenedor padre donde voy a hacer el appendClind de este div, en el cual se va a ir cargando todo lo que agrego al carrito
    // const shoppingCartItemsContainer = document.querySelector(`shoppingCartItemsContainer`)
    // esta variable que creamos recien, en realidad es una variable global que voy a usar en otros momentos, por lo tanto debo sacarla de esta funcion y dejarla afuera (la copie arriba)

    // Ahora lo que debo hacer es crear el elemento, todo dentro de una variable.El elemento es todo el div en el cual vamos a ir haciendo aparecer los datos de la compra. En el ejemplo este, el div esta marcado con el nombre "mockup example (delete)"
     const shoppingCartContent = `<div class="row shoppingCartItem">
                        <div class="col-6">
                        <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <img src='${itemImagen} ' class="shopping-cart-image">
                            <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${itemTitulo}
                            </h6>
                        </div>
                    </div>
                    <div class="col-2">
                    <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                            <p class="item-price mb-0 shoppingCartItemPrice">${itemPrecio} </p>
                        </div>
                    </div>
                    <div class="col-4">
                    <div
                        class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
                        <input class="shopping-cart-quantity-input shoppingCartItemQuantity" type="number"
                            value="1">
                        <button class="btn btn-danger buttonDelete" type="button">X</button>
                    </div>
                    </div>
                    </div>`;

    // habiendo creado ya en la const "shoppingCartContent" todo el codigo html que quiero agregarle al div, junto con las variables ${itemImagen}, ${itemTitulo} e ${itemPrecio}, debo usar el comando inerHTML para que esto se agregue al div creado en la variable "shoppingCartRow" 
        shoppingCartRow.innerHTML = shoppingCartContent;

    // por ultimo tengo que agregar el DIV del shoppingCartRow con un append (agregado de hijos al contenedor padre), al contenedor donde van a almacenarse los divs nuevos. contenedor padre "shoppingCartItemsContainer"
        agregoCarrito.append(shoppingCartRow);
    
    
    
    // intento de pushear el valor del PRECIO del item dedl carrito
        arregloCarritoVacio.push(itemPrecio);
}


// intento de uso de REDUCEC para ir sumando los precios del carrito
const arregloCarritoReducido = arregloCarritoVacio.reduce((a, b) => a + b, 0);




const divCarrito = document.getElementById("carritoCompraCartel");
const carrito = document.getElementById("botonComprar");


carrito.addEventListener("click", carritoTotal);

function carritoTotal() {

    const divInfoContenedor = document.createElement("div");
    const divInfo = ` <h3> El total de su compra es ${arregloCarritoReducido}. Gracias </h3>`;

    divInfoContenedor.innerHTML = divInfo;
    divCarrito.append(divInfoContenedor);
    setTimeout(() => {
        divInfoContenedor.remove()
    }, 3000)
};