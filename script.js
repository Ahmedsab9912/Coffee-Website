const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});
// Close menu when the close button is clicked 
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when a link is clicked
const navLinks = document.querySelectorAll(".nav-menu .nav-link");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("show-mobile-menu");
  });
});

// Scroll to top button logic
const scrollToTopButton = document.querySelector("#scroll-to-top-button");
if (scrollToTopButton) {
  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

// Active link highlighting on scroll (Scrollspy)
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 120; // adjust offset for sticky header
    const sectionId = current.getAttribute("id");
    const navLink = document.querySelector(`.nav-menu a[href*="${sectionId}"]`);
    
    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    }
  });
});

const swiper = new Swiper('.slider-container', {
  loop: true,
  grabCursor: true, // Adds a nice hand icon on hover
  spaceBetween: 30, // Adds padding between your testimonial cards

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true, // Allows users to click dots to jump to a slide
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  // Optional: allows multiple reviews on desktop, single on mobile
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

/* 
  Hero Section Background Image Slider
  Automatically cycles through a list of high-quality coffee shop images every 3 seconds (3000ms).
  Uses CSS transition for smooth cross-fading.
*/
const heroBgImages = [
  "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1600&h=900",
  "https://images.unsplash.com/photo-1498804103079-a6351b050096?auto=format&fit=crop&q=80&w=1600&h=900",
  "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=1600&h=900"
];

let currentBgIndex = 0;
const heroSection = document.querySelector(".hero-section");

function changeHeroBackground() {
  if (heroSection) {
    heroSection.style.backgroundImage = `url('${heroBgImages[currentBgIndex]}')`;
    currentBgIndex = (currentBgIndex + 1) % heroBgImages.length;
  }
}

// Initial background load
changeHeroBackground();

// Change background every 3 seconds
setInterval(changeHeroBackground, 3000);