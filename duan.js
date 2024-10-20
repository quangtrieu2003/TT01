  //  slide dự án 
const container7slider = document.querySelector("#container-7__slider");
const container7sliders = document.querySelectorAll("#container-7__slider > div");
const duAnBtnLeft = document.querySelector("#duan-slider-prev");
const duAnBtnRight = document.querySelector("#duan-slider-next");
const duAnLength = container7sliders.length;
let duAnCurrent = 0;

const duAnHandleChangeSlide = () => {
  if (duAnCurrent == duAnLength - 1) {
    duAnCurrent = 0;
    container7slider.style.transform = `translateX(0%)`;
  } else {
    duAnCurrent++;
    container7slider.style.transform = `translateX(${-50 * duAnCurrent}%)`;
  }
};
duAnBtnRight.addEventListener("click", () => {
  duAnHandleChangeSlide();
});

duAnBtnLeft.addEventListener("click", () => {
  if (duAnCurrent == 0) {
    duAnCurrent = duAnLength - 1;
    container7slider.style.transform = `translateX(${-50 * duAnCurrent}%)`;
  } else {
    duAnCurrent--;
    container7slider.style.transform = `translateX(${-50 * current}%)`;
  }
});




