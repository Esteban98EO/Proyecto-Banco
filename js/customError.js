// Array que contiene los diferentes tipos de errores de validación
export const tiposError = [
  "valueMissing", // El campo está vacío
  "typeMismatch", // El valor del campo no coincide con el tipo esperado (por ejemplo, email)
  "patternMismatch", // El valor del campo no coincide con el patrón esperado (expresión regular)
  "tooShort", // El valor del campo es demasiado corto
  "customError", // Error personalizado definido por el desarrollador
];

// Objeto que contiene los mensajes de error específicos para cada campo
export const mensajes = {
  nombre: {
    valueMissing: "El campo nombre no puede estar vacío.", // Mensaje para campo vacío
    patternMismatch: "Por favor, ingrese un nombre válido.", // Mensaje para patrón no coincidente
    tooShort: "Por favor, ingrese un nombre válido.", // Mensaje para valor demasiado corto
  },
  email: {
    valueMissing: "El campo email no puede estar vacío.", // Mensaje para campo vacío
    typeMismatch: "Por favor, ingrese un email válido.", // Mensaje para tipo no coincidente
    tooShort: "Por favor, ingrese un e-mail válido.", // Mensaje para valor demasiado corto
  },
  identificacion: {
    valueMissing: "El campo identificación no puede estar vacío.", // Mensaje para campo vacío
    patternMismatch: "Por favor, ingrese un número de identificación válido.", // Mensaje para patrón no coincidente
    tooShort: "El campo no tiene caracteres suficientes.", // Mensaje para valor demasiado corto
  },
  cuil: {
    valueMissing: "El campo cuil/cuit no puede estar vacío.", // Mensaje para campo vacío
    patternMismatch: "Por favor, ingrese un cuil/cuit válido.", // Mensaje para patrón no coincidente
    customError: "El cuil/cuit ingresado no existe.", // Mensaje para error personalizado
    tooShort: "El campo no tiene caracteres suficientes.", // Mensaje para valor demasiado corto
  },
  fecha_nacimiento: {
    valueMissing: "El campo fecha nacimiento no puede estar vacío.", // Mensaje para campo vacío
    customError: "Debes ser mayor de 18 años para registrarte.", // Mensaje para error personalizado
  },
  terminos: {
    valueMissing: "Debes aceptar los términos antes de continuar.", // Mensaje para campo vacío
  },
};
