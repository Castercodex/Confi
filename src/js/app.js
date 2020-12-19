const burger = document.querySelector(".hamburger");
let nav = document.querySelector(".nav-links");
let cancel = document.querySelector(".cancel");
let navShow = document.querySelector(".nav-show");
let navCircle = document.querySelector(".nav-circle");

burger.onclick = () => {
  nav.classList.toggle("nav-mobile");
  cancel.classList.toggle("cancel-view");
  navShow.classList.toggle("cancel");
};

navCircle.onclick = () => {
    navCircle.classList.toggle("active");
};
