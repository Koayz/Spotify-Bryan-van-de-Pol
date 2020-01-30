

// Voegt een class toe om zo het menu te laten zien als er op wordt gedrukt
// Bron : https://www.w3schools.com/howto/howto_js_mobile_navbar.asp

function myFunction() {
  var x = document.getElementById("active");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
} 




// Als je er buiten klikt verdwijnt het menu ook
window.onclick = function(event) {
  if (!event.target.matches('.toggle-button')) {
    var dropdowns = document.getElementsByClassName("navbar-links");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 