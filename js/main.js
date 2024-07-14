// Importa las funciones y variables necesarias desde otros módulos
import esUnCuil from "./validar-cuil.js"; // Importa la función para validar el CUIL
import esMayorDeEdad from "./validar-edad.js"; // Importa la función para validar la edad
import { tiposError, mensajes } from "./customError.js"; // Importa los tipos de error y mensajes de error personalizados

// Selecciona todos los campos del formulario que son obligatorios
const campoDeFormulario = document.querySelectorAll("[required]");
// Selecciona el formulario
const formulario = document.querySelector("[data-formulario]");

// Agrega un evento al formulario para evitar el envío predeterminado y manejar el envío de datos
formulario.addEventListener("submit", (e) => {
  e.preventDefault(); // Previene el comportamiento predeterminado del formulario

  // Crea un objeto con las respuestas del formulario
  const listaRespuesta = {
    nombre: e.target.elements["nombre"].value, // Obtiene el valor del campo "nombre"
    email: e.target.elements["email"].value, // Obtiene el valor del campo "email"
    identificacion: e.target.elements["identificacion"].value, // Obtiene el valor del campo "identificacion"
    cuil: e.target.elements["cuil"].value, // Obtiene el valor del campo "cuil"
    fecha_nacimiento: e.target.elements["fecha_nacimiento"].value, // Obtiene el valor del campo "fecha_nacimiento"
  };

  // Guarda el objeto en el localStorage
  localStorage.setItem("registro", JSON.stringify(listaRespuesta));
  // Redirige a otra página
  window.location.href = "../pages/abrir-cuenta-form-2.html";
});

// Agrega eventos a cada campo del formulario para verificar su validez cuando pierden el foco o son inválidos
campoDeFormulario.forEach((campo) => {
  campo.addEventListener("blur", () => verificarCampo(campo)); // Verifica el campo cuando pierde el foco
  campo.addEventListener("invalid", (evento) => evento.preventDefault()); // Previene el comportamiento predeterminado en caso de ser inválido
});

// Función para verificar la validez de un campo
function verificarCampo(campo) {
  let mensaje = ""; // Inicializa el mensaje de error como vacío
  campo.setCustomValidity(""); // Restablece cualquier mensaje de validez personalizado

  // Si el campo es "cuil" y tiene al menos 11 caracteres, verifica el CUIL
  if (campo.name == "cuil" && campo.value.length >= 11) {
    esUnCuil(campo);
  }
  // Si el campo es "fecha_nacimiento" y no está vacío, verifica la edad
  if (campo.name == "fecha_nacimiento" && campo.value != "") {
    esMayorDeEdad(campo);
  }

  // Recorre cada tipo de error y verifica si el campo tiene ese error
  tiposError.forEach((error) => {
    if (campo.validity[error]) {
      mensaje = mensajes[campo.name][error]; // Obtiene el mensaje de error correspondiente
    }
  });

  // Selecciona el elemento donde se mostrará el mensaje de error
  const mensajeError = campo.parentNode.querySelector(".mensaje-error");
  // Verifica la validez del campo
  const validarInputCheck = campo.checkValidity();

  // Si el campo no es válido, muestra el mensaje de error
  if (!validarInputCheck) {
    mensajeError.textContent = mensaje;
  } else {
    // Si el campo es válido, limpia el mensaje de error
    mensajeError.textContent = "";
  }
}
