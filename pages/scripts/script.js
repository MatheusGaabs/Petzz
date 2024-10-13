let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  slider.style.transform = `translateX(${
    -index * (slides[0].offsetWidth + 20)
  }px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds
