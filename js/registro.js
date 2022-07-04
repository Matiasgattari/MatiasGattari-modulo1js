function Persona(nombre, edad, direccion, mail, telefono) {

    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
    this.mail = mail;
    this.telefono = telefono;
}

const persona1 = new Persona(prompt("ingresa tu nombre").toLocaleLowerCase(), parseInt(prompt("Ingresa tu edad")), prompt("Cuál es tu dirección?").toLocaleLowerCase(), prompt("Decime tu mail").toLocaleLowerCase(), parseInt(prompt("Por último dame tu telefono.")));
console.log(persona1);
alert("Registro completo");