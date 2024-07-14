// Función principal para validar un CUIL
export default function esUnCuil(campo) {
  // Remueve cualquier guión o barra del valor del campo
  const cuil = campo.value.replace(/[-\/]/g, "");

  // Verifica si el CUIL contiene números repetidos
  if (tieneNumerosRepetidos(cuil)) {
    console.log("Valores repetidos");
    campo.setCustomValidity("Valores repetidos");
  } else {
    // Verifica los primeros dígitos y el dígito verificador del CUIL
    if (validarPrimerosDigitos(cuil) || validarDigitoVerifiador(cuil)) {
      console.log("Cuil valido");
    } else {
      console.log("Cuil no existe");
      campo.setCustomValidity("Cuil no existe");
    }
  }
}

// Función para verificar si el CUIL tiene números repetidos
function tieneNumerosRepetidos(cuil) {
  // Lista de CUILs con números repetidos
  const numerosRepetidos = [
    "00000000000",
    "11111111111",
    "22222222222",
    "33333333333",
    "44444444444",
    "55555555555",
    "66666666666",
    "77777777777",
    "88888888888",
    "99999999999",
  ];
  // Retorna true si el CUIL está en la lista de números repetidos
  return numerosRepetidos.includes(cuil);
}

// Función para validar los primeros dígitos del CUIL
function validarPrimerosDigitos(cuil) {
  // Obtiene los primeros dos dígitos del CUIL
  let primerosDigitos = cuil.substr(0, 2);
  // Lista de primeros dígitos válidos
  let digitosValidos = ["20", "23", "24", "27", "30", "33", "34"];
  // Retorna true si los primeros dos dígitos están en la lista de dígitos válidos
  return digitosValidos.includes(primerosDigitos);
}

// Función para validar el dígito verificador del CUIL
function validarDigitoVerifiador(cuil) {
  let acumulado = 0;
  // Factores de multiplicación para cada dígito del CUIL
  const factores = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

  // Calcula el acumulado multiplicando cada dígito por su factor correspondiente
  for (let i = 0; i < 10; i++) acumulado += parseInt(cuil[i], 10) * factores[i];

  // Calcula el dígito verificador teórico
  let validadorTeorico = 11 - (acumulado % 11);

  // Ajusta el dígito verificador teórico si es 11 o 10
  if (validadorTeorico == 11) {
    validadorTeorico = 0;
  } else if (validadorTeorico == 10) {
    validadorTeorico = 9;
  }

  // Obtiene el dígito verificador real del CUIL
  const digitoVerificador = parseInt(cuil[10], 10);

  // Retorna true si el dígito verificador real coincide con el teórico
  return digitoVerificador === validadorTeorico;
}
