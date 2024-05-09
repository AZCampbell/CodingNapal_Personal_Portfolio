const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

// Add an event listener to the menu button to toggle the menu on and off
menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  // Toggle the menu button icon from "menu" to "close"
  document.querySelector(".menu-btn i").classList.toggle("active");
});

// Check for scrolling of the page to change the navbar
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
