const modoNocheBtn = document.getElementById("modoNocheBtn");
const contenido = document.getElementById("todo");
const modoNoche = document.querySelector(".modo__noche");
const modoDia = document.querySelector(".modo__dia");

// Inicialmente, modoNoche está en false
let modoNocheActual = false;

modoNocheBtn.addEventListener("click", () => {
    // Cambia el estado de modoNoche de true a false o viceversa
    modoNocheActual = !modoNocheActual;

    // Aplica las clases según el estado de modoNoche
    if (modoNocheActual) {
        contenido.classList.add("night__mode");
        modoNoche.classList.add("modo__noche__img");
        modoDia.classList.add("modo__dia__img");
    } else {
        contenido.classList.remove("night__mode");
        modoNoche.classList.remove("modo__noche__img");
        modoDia.classList.remove("modo__dia__img");
    }
});

//Validación  de formulario en javascript acá
const formulario = document.querySelector(".formcontato__form");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const asuntoInput = document.getElementById("asunto");
const mensajeInput = document.getElementById("mensaje");

let esFormularioValido = true; // Variable para rastrear el estado de validación

// Función para validar correo electrónico
function validarEmail(email) {
    // Expresión regular para validar el formato de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

// Función para validar un campo y mostrar mensajes de error
function validarCampo(input, mensajesError, validarFuncion) {
    input.addEventListener("input", (event) => {
        const valor = input.value.trim();
        const mensajeErrorElement = input.nextElementSibling; // Elemento para mostrar el mensaje de error

        if (valor === "") {
            mensajeErrorElement.textContent = `El campo ${input.name} no puede estar en blanco.`;
            esFormularioValido = false; // Marcar el formulario como no válido
        } else if (input.name === "nombre" && (valor.length > 50 || valor.length < 2)) {
            mensajeErrorElement.textContent = `El campo ${input.name} no debe exceder los 50 caracteres ni tener menos de 2.`;
            esFormularioValido = false; // Marcar el formulario como no válido
        } else if (input.name === "asunto" && valor.length > 50) {
            mensajeErrorElement.textContent = `El campo ${input.name} no debe exceder los 50 caracteres.`;
            esFormularioValido = false; // Marcar el formulario como no válido
        } else if (input.name === "mensaje" && valor.length > 300) {
            mensajeErrorElement.textContent = `El campo ${input.name} no debe exceder los 300 caracteres.`;
            esFormularioValido = false; // Marcar el formulario como no válido
        } else if (validarFuncion && !validarFuncion(valor)) {
            mensajeErrorElement.textContent = `El campo ${input.name} no es válido.`;
            esFormularioValido = false; // Marcar el formulario como no válido
        } else {
            // Limpiar mensaje de error si el campo es válido
            mensajeErrorElement.textContent = "";
        }
    });
}

// Aplicar la validación a los campos relevantes
validarCampo(nombreInput, nombreInput.nextElementSibling);
validarCampo(emailInput, emailInput.nextElementSibling, validarEmail);
validarCampo(asuntoInput, asuntoInput.nextElementSibling);
validarCampo(mensajeInput, mensajeInput.nextElementSibling);

// Agregar un evento "submit" al formulario
formulario.addEventListener("submit", (event) => {
    if (!esFormularioValido) {
        event.preventDefault(); // Evitar que el formulario se envíe si no es válido
    }
});
 
  // Generacion de PDF

  const pdfButton = document.getElementById("generatePdfButton");

  pdfButton.addEventListener("click", () => {
    alert("Construcción en proceso");
  });
