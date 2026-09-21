const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});