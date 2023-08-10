//shrinking on scroll for navbar
window.addEventListener("scroll", function() {
  const navbar = document.getElementById("navbar");
  if (window.pageYOffset > 0) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});

//hamburger menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

hamburgerMenu.addEventListener("click", function() {
  mobileMenu.classList.toggle("active");
});