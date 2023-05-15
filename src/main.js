import "./styles/index.scss";

const burger = document.querySelector(".burger-menu");
const nav = document.querySelector(".nav");
console.log(nav);

// nav.classList.add("aaaa")

burger.addEventListener("click", () => {
  burger.classList.toggle("burger-menu_opened");
  nav.classList.toggle("nav_opened");
  console.log(nav);
});
