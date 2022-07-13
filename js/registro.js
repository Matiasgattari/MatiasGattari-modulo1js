// Creacion de arreglo para ir acumulando los datos de usuario generados por la funcion constructora (class constructor)
let arregloUsuarios = [];

class Usuarios {
    constructor(nombre, apellido, edad, direccion, mail, telefono) {
        // this.nombreCompleto = {"nombre": nombre, "apellido" : apellido};
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
        this.mail = mail;
        this.telefono = telefono;
        this.saludar = function () {
            console.log(`Usuario registrado: ` + this.nombre + ` ` + this.apellido + ".");
            // alert(`hola ,` + this.nombre + ` ` + this.apellido + ". Gracias por registrarte en nuestra página");
        }

        // Validacion de los datos al momento de la toma 
        while (!isNaN(nombre)) {
            alert("Nombre invalido");
            nombre = prompt("ingresa tu nombre").toLocaleLowerCase();
        }

        while (!isNaN(direccion)) {
            alert("direccion no valida");
            direccion = prompt("Cuál es tu dirección?").toLocaleLowerCase();

        }

        while (!isNaN(mail)) {
            alert("mail invalido");
            mail = prompt("Decime tu mail").toLocaleLowerCase();

        }

        while (isNaN(edad)) {
            alert("La edad debe ser un numero");
            edad = parseInt(prompt("Ingresa tu edad"));
        }

        while (isNaN(telefono)) {
            alert("El telefono no debe tener puntos ni guiones, numerico");
            telefono = parseInt(prompt("Ingresa tu telefono"));
        }
    }
};

// Codigo para pedirle datos de registro al usuario por prompt (con el .push puedo hacer que los datos se vayan cargando cuando los suba el cliente directamente)
// arregloUsuarios.push(new Usuarios(prompt("ingresa tu nombre").toLocaleLowerCase(), parseInt(prompt("Ingresa tu edad")), prompt("Cuál es tu dirección?").toLocaleLowerCase(), prompt("Decime tu mail").toLocaleLowerCase(), parseInt(prompt("Por último dame tu telefono."))));


// // Usuarios falso para probar funcionalidad del codigo (2 opciones para realizar el push)
arregloUsuarios.push(new Usuarios("enrique", "gomez", 18, "aaaa", "bbbb", 111111111111));
// // const usuario1 = new Usuarios("enrique", "gomez", 18, "aaaa", "bbbb", 111111111111);
// // arregloUsuarios.push(usuario1);

arregloUsuarios.push(new Usuarios("lautaro", "mendez", 15, "ffffff", "ggggg", 2222222222));
// const usuario2 = new Usuarios("lautaro", "mendez", 15, "ffffff", "ggggg", 2222222222);
// arregloUsuarios.push(usuario2);


// Map para modificar el nombre y apellido de los usuarios registrados y unificarlos
let registroNuevo = arregloUsuarios.map(function (usuario) {
    return {
        nombreCompleto: usuario.nombre + ` ` + usuario.apellido,
        edad: usuario.edad,
        direccion: usuario.direccion,
        mail: usuario.mail,
        telefono: usuario.telefono,
        saludar: function () {
            console.log(`Usuario registrado: ` + this.nombre + ` ` + this.apellido + ".");
            // alert(`hola ,` + this.nombre + ` ` + this.apellido + ". Gracias por registrarte en nuestra página")
        },
    }
});



// Prueba de funcionalidad del map anterior
console.log("INICIO DE PRUEBA DE LOGICA")
console.log(arregloUsuarios);
console.log(registroNuevo);
arregloUsuarios[0].saludar()
arregloUsuarios[1].saludar()
console.log(arregloUsuarios[1].apellido);
console.log(registroNuevo[0].nombreCompleto);

// Saludo final del registro
// alert(`Gracias por registrarse en nuestra página`);