// Initialize Swiper for "Hero section with vertical carousel"
var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  centeredSlides: true,
  speed: 9000,
  autoplay: {
    delay: 1,
  },
  slidesPerView: "auto",
  allowTouchMove: false,
  disableOnInteraction: true,
});
var mySwiper = new Swiper(".swiper-container1", {
  direction: "vertical",
  loop: true,
  speed: 9000,
  autoplay: {
    delay: 2,
  },
  slidesPerView: "auto",
  allowTouchMove: false,
  disableOnInteraction: true,
});

// Initialize Swiper for "Hero section with statistics carousel"
let SwiperTop = new Swiper(".swiper--top", {
  spaceBetween: 32,
  speed: 8000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView: 3.5,
  allowTouchMove: false,
  disableOnInteraction: true,
});

// Initialize Swiper for "Product hero section with carousel"
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});