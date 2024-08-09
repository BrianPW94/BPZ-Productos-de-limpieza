let currentSlide = 0;

function moveSlide(n) {
    const slides = document.querySelectorAll('.review-card');
    const totalSlides = slides.length;
    
    currentSlide += n;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    const sliderContainer = document.querySelector('.slider-container');
    sliderContainer.style.transform = `translateX(${-currentSlide * 100}%)`;
}