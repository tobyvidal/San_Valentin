// Función para abrir el modal y mostrar la imagen y la descripción
function openModal(imgSrc, desc) {
    // Obtener el modal y los elementos de la imagen y la descripción
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var modalDesc = document.getElementById("modal-desc");

    // Asignar la imagen y la descripción al modal
    modalImg.src = "imagenes/" + imgSrc + ".png"; // Asegúrate de que las rutas sean correctas
    modalDesc.textContent = desc;

    // Mostrar el modal
    modal.style.display = "block";
}

function openModalViajes(imgSrc, desc) {
    // Obtener el modal y los elementos de la imagen y la descripción
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    var modalDesc = document.getElementById("modal-desc");

    // Asignar la imagen y la descripción al modal
    modalImg.src = "../imagenesBenichatel/" + imgSrc + ".png"; // Asegúrate de que las rutas sean correctas
    modalDesc.textContent = desc;

    // Mostrar el modal
    modal.style.display = "block";
}



// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Cerrar el modal si se hace clic fuera del contenido del modal
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-slide");
const totalSlides = slides.length;
const carousel = document.querySelector(".carousel");

function moveSlide(step) {
    slideIndex = (slideIndex + step + totalSlides) % totalSlides;
    updateCarousel();
}

function updateCarousel() {
    const offset = -slideIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Asegura que el primer slide esté visible al inicio
updateCarousel();

function irAViaje1(){
    window.location.href = "viajes/benichatel.html";
}
