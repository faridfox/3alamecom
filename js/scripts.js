/*
// — Vertical Block #1 (vertical-one) —
var verticalOneSwiper = new Swiper(".vertical-one", {
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

// — Vertical Block #2 (vertical-two) —
var verticalTwoSwiper = new Swiper(".vertical-two", {
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

// — Statistics Block (stats-carousel) —
var statsSwiper = new Swiper(".stats-carousel", {
  spaceBetween: 32,
  speed: 8000,
  autoplay: {
    delay: 1,
  },
  loop: true,
  slidesPerView: 3.5,
  allowTouchMove: false,
  disableOnInteraction: true,
  // Note: We aren’t using default Swiper pagination/navigation here, so we don’t set them. If you ever add bullets/arrows, give them their own selectors.
});

// — Product Hero Block (product-hero) —
var productHeroSwiper = new Swiper(".product-hero", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  keyboard: {
    enabled: true,
  },
  scrollbar: {
    el: ".product-scrollbar",
    dragClass: "product-scrollbar-drag",
  },
  navigation: {
    nextEl: ".product-button-next",
    prevEl: ".product-button-prev",
  },
  pagination: {
    el: ".product-pagination",
    type: "fraction",
    bulletClass: "product-pagination-bullet",
    bulletActiveClass: "product-pagination-bullet-active",
    currentClass: "product-pagination-current",
    totalClass: "product-pagination-total",
  },
});


// — Testimonial Slider with background image —
var swiper = new Swiper(".mySwiper", {
  loop: "true",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
*/

// — Basic testimonial cards —
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 28,
  centeredSlides: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 28,
      centeredSlides: true,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});
