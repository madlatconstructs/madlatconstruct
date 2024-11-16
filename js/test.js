const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active', 'out'); // Remove active and out classes
    if (i === index) {
      slide.classList.add('active'); // Show the active slide
    } else if (i === (index - 1 + totalSlides) % totalSlides) {
      slide.classList.add('out'); // Slide out the previous slide
    }
  });
  updateBlurredPreview();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides; // Move to next slide
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Move to previous slide
  showSlide(currentIndex);
}

function updateBlurredPreview() {
  slides.forEach((slide, index) => {
    const blurredPreview = slide.querySelector('.blurred-preview');
    const nextIndex = (index + 1) % totalSlides; // Get the next index
    const nextPersonImage = slides[nextIndex].querySelector('.main-image').getAttribute('src');
    blurredPreview.style.backgroundImage = `url(${nextPersonImage})`;
  });
}

// Initialize first slide
showSlide(currentIndex);

window.addEventListener("load", function() {
  // Hide the loading screen
  document.getElementById("loading-screen").style.display = "none";
  // Show the main content
  document.getElementById("main-content").style.display = "block";
});


const coreValues = document.querySelectorAll('.core-value');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Trigger when 50% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show'); // Add the 'show' class when in view
      observer.unobserve(entry.target); // Stop observing after animation triggers
    }
  });
}, observerOptions);

coreValues.forEach(value => observer.observe(value));


