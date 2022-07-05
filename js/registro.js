function Persona(nombre, edad, direccion, mail, telefono) {

    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
    this.mail = mail;
    this.telefono = telefono;


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


const persona1 = new Persona(prompt("ingresa tu nombre").toLocaleLowerCase(), parseInt(prompt("Ingresa tu edad")), prompt("Cuál es tu dirección?").toLocaleLowerCase(), prompt("Decime tu mail").toLocaleLowerCase(), parseInt(prompt("Por último dame tu telefono.")));
alert("Registro completo");


// Validación de los datos por consola
console.log(persona1);