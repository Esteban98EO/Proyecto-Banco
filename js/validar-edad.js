// Exporta la función principal que verifica si una persona es mayor de edad
export default function esMayorDeEdad(campo) {
    // Convierte el valor del campo a un objeto Date
    const fechaNacimiento = new Date(campo.value);

    // Verifica si la edad es menor de 18 años, si es así establece un mensaje de error
    if (!validarEdad(fechaNacimiento)) {
        campo.setCustomValidity("Necesitas ser mayor de edad");
    }
}

// Función que valida si la fecha dada corresponde a una persona mayor de 18 años
function validarEdad(fecha) {
    // Obtiene la fecha actual
    const fechaActual = new Date();
    
    // Calcula la fecha correspondiente a 18 años después de la fecha de nacimiento
    const fechaMas18 = new Date(fecha.getUTCFullYear() + 18, fecha.getUTCMonth(), fecha.getUTCDate());

    // Retorna true si la fecha actual es igual o posterior a la fecha de los 18 años
    return fechaActual >= fechaMas18;
}
