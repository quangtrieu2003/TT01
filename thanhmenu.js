// thanh mennu
const toggleButton = document.getElementById("toggleButton");
const menu = document.querySelector(".menu");

toggleButton.addEventListener("click", () => {
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
  document.getElementById("menuButton").addEventListener("click");
});





/// quay lai dau trang
const quaylai = document.querySelector(".btnquay");
quaylai.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});




//thay dooir no dung
const bocs = document.querySelector(".boc");
const phantus = document.querySelectorAll(".phantu");
const btnLeft1 = document.querySelector(".btn-left1");
const btnRight1 = document.querySelector(".btn-right1");

function xemthem(trangThai, a) {
  if (trangThai == "mo") {
    const noidungs = document.querySelector(".noidung" + a);
    noidungs.style.display = "flex";
  } else {
    const noidungs = document.querySelector(".noidung" + a);
    noidungs.style.display = "none";
  }
}



const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal("body > .container > div", {
  ...scrollRevealOption,
  interval: 50,
});

