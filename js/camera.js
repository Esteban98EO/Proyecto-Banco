// Selecciona el botón para abrir la cámara
const botonAbrirCamara = document.querySelector("[data-video-boton]");
// Selecciona el elemento de video donde se mostrará la cámara
const video = document.querySelector("[data-video]");
// Selecciona el contenedor de la cámara
const campoCamara = document.querySelector("[data-camera]");

// Selecciona el botón para tomar la foto
const botonTomarFoto = document.querySelector("[data-tomar-foto]");
// Selecciona el mensaje que se muestra después de tomar la foto
const mensaje = document.querySelector("[data-mensaje]");
// Selecciona el canvas donde se dibujará la foto
const canvas = document.querySelector("[data-video-canvas]");
// Variable para almacenar la URL de la imagen tomada
let imgUrl = "";

// Selecciona el botón para enviar la foto
const botonEnviar = document.querySelector("[data-enviar]");

// Añade un evento al botón para abrir la cámara
botonAbrirCamara.addEventListener("click", async () => {
  // Solicita acceso a la cámara del usuario
  const iniciarVideo = await navigator.mediaDevices.getUserMedia({
    video: true, // Sólo video, no audio
    audio: false,
  });
  // Oculta el botón para abrir la cámara
  botonAbrirCamara.style.display = "none";
  // Muestra el campo de la cámara
  campoCamara.style.display = "block";
  // Asigna el stream de video a la etiqueta de video
  video.srcObject = iniciarVideo;
})

// Añade un evento al botón para tomar la foto
botonTomarFoto.addEventListener("click", () => {
  // Dibuja la imagen del video en el canvas
  canvas.getContext("2d").drawImage(video, 0, 0, canvas.width, canvas.height);
  // Convierte la imagen del canvas a una URL
  imgUrl = canvas.toDataURL("image/jpeg");
  // Oculta el campo de la cámara
  campoCamara.style.display = "none";
  // Muestra el mensaje de éxito
  mensaje.style.display = "block";
});

// Añade un evento al botón para enviar la foto
botonEnviar.addEventListener("click", () => {
  // Obtiene los datos del registro desde el almacenamiento local
  const recibirDatos = localStorage.getItem("registro");
  // Convierte los datos del registro de JSON a un objeto
  const convertirDatos = JSON.parse(recibirDatos);
  // Añade la URL de la imagen al objeto de registro
  convertirDatos.img_url = imgUrl;
  // Guarda el objeto de registro actualizado en el almacenamiento local
  localStorage.setItem("registro", JSON.stringify(convertirDatos));
  // Redirige al usuario a la siguiente página del formulario
  window.location.href = "../pages/abrir-cuenta-form-3.html";
});
