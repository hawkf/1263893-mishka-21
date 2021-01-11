var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var modal = document.querySelector('.modal');
var modal_overlay = document.querySelector('.modal-overlay');
var product_week = document.querySelector('.product-week__button');
var modal__button = document.querySelector('.modal__button');
var production_process__button = document.querySelector('.production-process__button');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

product_week.addEventListener('click', function () {
  modal.classList.remove("visually-hidden");
  modal_overlay.classList.remove("visually-hidden");
});

production_process__button.addEventListener('click', function () {
  modal.classList.remove("visually-hidden");
  modal_overlay.classList.remove("visually-hidden");
});

modal__button.addEventListener('click', function () {
  modal.classList.add("visually-hidden");
  modal_overlay.classList.add("visually-hidden");
});
