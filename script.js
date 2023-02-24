const burgerBtn = document.querySelector('.burger-button');
const menu = document.querySelector('header nav');
const menuElement = document.querySelectorAll('header nav ul li')

burgerBtn.addEventListener('click', function() {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open')
  } else {
    menu.classList.add('open')
  }
});

menuElement[0].addEventListener('click', function() {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open')
  }
})
menuElement[1].addEventListener('click', function() {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open')
  }
})
menuElement[2].addEventListener('click', function() {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open')
  }
})