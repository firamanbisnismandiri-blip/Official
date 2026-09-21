const menu = document.getElementById("menu");
const links = document.getElementById("links");


// Menu mobile
menu.addEventListener("click", () => {
  links.classList.toggle("active");
});


// Tutup menu setelah memilih halaman
document.querySelectorAll(".links a").forEach((a) => {

  a.addEventListener("click", () => {
    links.classList.remove("active");
  });

});