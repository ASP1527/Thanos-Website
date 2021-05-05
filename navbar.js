const burger = document.querySelector(".burger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");
const main = document.querySelector("main");

burger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  main.classList.toggle("hide");
});
