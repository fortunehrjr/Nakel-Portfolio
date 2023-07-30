var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

gsap.fromTo(".left-side", { opacity: 0 }, { opacity: 1, duration: 1.6 });
gsap.fromTo(".right-side", { opacity: 0 }, { opacity: 1, duration: 1.6 });
gsap.fromTo(
  ".text",
  { opacity: 0, y: 100 },
  { opacity: 1, y: 0, duration: 1.2 }
);
gsap.fromTo(
  ".hi-pic",
  { opacity: 0, x: 400 },
  { opacity: 1, x: 0, duration: 1.2, ease: "power2.out" }
);
