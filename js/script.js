// Selectors
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");
const dropdownLinkBtn = document.querySelectorAll(".dropdown-link-btn");
const dropdown = document.querySelectorAll(".dropdown");
const alert = document.querySelector(".alert");
const cancelIcon = document.querySelector(".cancel-icon");

// Events Handling
hamburgerMenu.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});

cancelIcon.addEventListener("click", () => {
  alert.classList.add("hide-alert");
  setTimeout(() => {
    alert.style.display = "none";
  }, 300);
});

setTimeout(() => {
  alert.classList.add("hide-alert");
  setTimeout(() => {
    alert.style.display = "none";
  }, 300);
}, 3000);

dropdownLinkBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    dropdown[index].classList.toggle("show-dropdown");
  });
});
