// MENSAJE DE BIENVENIDA
window.addEventListener("load", function () {
    alert("Bienvenido a mi portafolio");
});

// CAMBIAR TEXTO
const boton = document.getElementById("btnCambiarTexto");
const texto = document.getElementById("textoSobreMi");

boton.addEventListener("click", function () {
    texto.textContent = "Actualmente estoy enfocado en convertirme en desarrollador web y mejorar cada día mis habilidades.";
});

// MOSTRAR / OCULTAR PROYECTOS
const proyectos = document.getElementById("proyectos");

const botonToggle = document.createElement("button");
botonToggle.textContent = "Mostrar / Ocultar Proyectos";

proyectos.prepend(botonToggle);

botonToggle.addEventListener("click", function () {
    const contenido = proyectos.querySelector(".proyectos-grid");

    if (contenido.style.display === "none") {
        contenido.style.display = "grid";
    } else {
        contenido.style.display = "none";
    }
});
