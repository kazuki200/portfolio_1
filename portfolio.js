

const swiper = new Swiper('.swiper-container', {
  effect: "fade",
  autoplay: { delay: 2500, disableOnInteraction: false, },
  speed: 1000,
  loop: true,



  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelector("#hamburger").addEventListener("click", ()=>{
  document.querySelector("#hamburger").classList.toggle("active");
  document.querySelector("#nav").classList.toggle("active");
  
  const $acordion = document.querySelector('ul').classList.toggle('is-open');
  })
});


