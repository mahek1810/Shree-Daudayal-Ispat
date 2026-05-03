const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const slidesContainer = document.querySelector(".slides");
let currentIndex = 0;

function showSlide(index) {
    // Update active slide and dot
    slides.forEach((slide, i) => {
        dots[i].classList.remove("active");
    });

    dots[index].classList.add("active");

    // Move the slides container
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

function currentSlide(index) {
    showSlide(index);
}

// Auto-slide
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}, 10000);

// Initial setup
showSlide(currentIndex);
