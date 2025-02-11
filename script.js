// Navbar
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.navbar .menu-toggle');
  const mobileMenu = document.querySelector('.navbar .mobile-menu-items')

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active');
  })
})

// Type Effect
const dynamicText = document.querySelector('.hero .hero-text .type-effect');
const words = ["књиговодствене", "пореске", "административне"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex]
  const currentChar = currentWord.substring(0, charIndex);
  dynamicText.textContent = currentChar;

  if(!isDeleting && charIndex < currentWord.length) {
    // If condition is tre, type the next character
    charIndex++;
    setTimeout(typeEffect, 200)
  } else if(isDeleting && charIndex > 0) {
    // If condition is true, remove the previous character
    charIndex--;
    setTimeout(typeEffect, 100);
  } else {
    // If word is deleted then swich to the next word
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    setTimeout(typeEffect, 1200);
  }
}

typeEffect()