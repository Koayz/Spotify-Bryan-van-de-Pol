// First we define our required variables: select the HTML elements which you want to manipulate
const hamburger = document.querySelector('.hamburger');
const line = document.querySelector('.link');
const navigation = document.querySelector('.navigatie');
// Add an eventListener to our hamburger, the event we are listening for is a 'click'.
// When the 'click' event is fired, we run our animateHamburger function
hamburger.addEventListener('click', animateHamburger);
// Our animateHamburger function simple toggles the class active on our hamburger and navigation elements
function animateHamburger() {
  hamburger.classList.toggle('active');
  navigation.classList.toggle('active');
};