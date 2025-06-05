// Initialize Swiper
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
