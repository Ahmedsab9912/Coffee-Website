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