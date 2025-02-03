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