let usuario = document.getElementById("contenedorLogin");

usuario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    if (e.target.children[1].value.includes("@") && e.target.children[1].value.includes(".")) {
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Inicio exitoso";
        mensaje.className = "verde";
        mensaje.id = "verde";
        document.body.append(mensaje);
        rojo.remove();

    } else {
        let mensaje = document.createElement("div");
        mensaje.innerHTML = "Datos incorrectos";
        mensaje.className = "rojo ";
        mensaje.id = "rojo";
        e.target.children[1].value = "";
        document.body.append(mensaje);
        verde.remove();
    }
};