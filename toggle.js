const navLists = document.querySelector(".nav-list");
const navToggle = document.querySelector(".nav-toggle");
navToggle.addEventListener("click", function () {
  navLists.classList.toggle("show");
});
