let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");
}

document.querySelector(".next").onclick = () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
};

document.querySelector(".prev").onclick = () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
};
