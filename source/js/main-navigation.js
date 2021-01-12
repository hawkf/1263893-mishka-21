var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var modal = document.querySelector('.modal');
var modalOverlay = document.querySelector('.modal-overlay');
var productWeek = document.querySelector('.product-week__button');
var modalButton = document.querySelector('.modal__button');
var productionProcessButton = document.querySelector('.production-process__button');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

if(productWeek != null) {
  productWeek.addEventListener('click', function () {
    modal.classList.remove("visually-hidden");
    modalOverlay.classList.remove("visually-hidden");
  });
}

if(productionProcessButton != null) {
  productionProcessButton.addEventListener('click', function () {
    modal.classList.remove("visually-hidden");
    modalOverlay.classList.remove("visually-hidden");
  });
}

if(modalButton != null) {
  modalButton.addEventListener('click', function () {
    modal.classList.add("visually-hidden");
    modalOverlay.classList.add("visually-hidden");
  });
}
