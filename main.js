const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const navSearch = document.getElementById("nav-search");

navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});



// ---------SCROLL ANIMATION--------

ScrollReveal().reveal('.card', { interval: 200, origin: 'bottom', distance: '50px', duration: 800 });
ScrollReveal().reveal('.hero-content', { delay: 300, origin: 'top', distance: '40px', duration: 1000 });

// ----------------------

const swiper = new Swiper('.clients-swiper', {
  slidesPerView: 2,
  spaceBetween: 16,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.clients-swiper .swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.clients-swiper .swiper-button-next',
    prevEl: '.clients-swiper .swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
  },
});



