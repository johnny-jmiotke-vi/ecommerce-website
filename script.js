// Random Tip Generator (index.html)
function displayRandomTip() {
    const tips = [
        "Drink chamomile tea before bed to promote relaxation.",
        "Incorporate omega-3 supplements for brain health.",
        "Use organic skincare to nourish your skin naturally.",
        "Stay hydrated with herbal infusions throughout the day.",
        "Take a daily walk to boost your immune system."
    ];
    const randomIndex = Math.floor(Math.random() * tips.length);
    document.getElementById("tip").textContent = tips[randomIndex];
}

// Run on page load for index.html
if (document.getElementById("tip")) {
    displayRandomTip();
}

// Click-to-Reveal Product Info (products.html)
function toggleDetails(id) {
    const element = document.getElementById(id);
    element.classList.toggle("hidden");
}

// Image Slideshow (gallery.html)
const slides = [
    "images/product1.jpg",
    "images/product2.jpg",
    "images/product3.jpg"
];
let currentSlide = 0;
let autoSlideInterval = null;

function showSlide(index) {
    const slideImage = document.getElementById("slide-image");
    if (slideImage) {
        slideImage.src = slides[index];
        slideImage.alt = `Product ${index + 1}`;
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function toggleAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
        autoSlideInterval = null;
    } else {
        autoSlideInterval = setInterval(nextSlide, 3000);
    }
}

// Initialize slideshow
if (document.getElementById("slide-image")) {
    showSlide(currentSlide);
    toggleAutoSlide(); // Start auto-sliding
}

// Form Validation (contact.html)
function validateForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const error = document.getElementById("form-error");

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 2) {
        error.textContent = "Name must be at least 2 characters.";
        return false;
    }
    if (!emailRegex.test(email)) {
        error.textContent = "Please enter a valid email address.";
        return false;
    }
    if (message.length < 10) {
        error.textContent = "Message must be at least 10 characters.";
        return false;
    }

    error.textContent = "Form submitted successfully!";
    error.style.color = "green";
    return true;
}

// Dark Mode Toggle (about.html)
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}