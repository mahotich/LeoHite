let burgerBtn= document.querySelector('.burger');
let menuBurger= document.querySelector('.menu__nav');

burgerBtn.addEventListener('click', function(){
  menuBurger.classList.toggle('active');
  burgerBtn.classList.toggle('burger_active');
  document.body.classList.toggle('body_active');
});