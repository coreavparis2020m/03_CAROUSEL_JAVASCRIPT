let overlay = document.querySelector('.overlay');
let carousel = document.querySelector('.carousel');
let slides = document.querySelectorAll('.carousel .slide');

// offsetWidth devuelve el valor de la propiedad width del elemento

function setSizes() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.left = carousel.offsetWidth * -i + 'px';
    }
}

function openModal() {
    overlay.style.display = 'block';
    carousel.style.display = 'block';
    setSizes(); // Llama a la función inicial para establecer la posición left de cada slide
}

// offsetLeft devuelve el valor de la propiedad left del elemento

function nextSlide() {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.left =  slides[i].offsetLeft + carousel.offsetWidth + 'px';
    }
}

function closeModal() {
    overlay.style.display = 'none';
    carousel.style.display = 'none';
}

