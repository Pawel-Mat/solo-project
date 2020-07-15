const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.navigation');
console.log(navigation);
hamburger.addEventListener('click', function(){
  hamburger.classList.toggle('hamburger-active');
  navigation.classList.toggle('navigation-active');
});