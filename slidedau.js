
let currentSlide = 0;
const slides = document.querySelectorAll(".list-images1 img");
const slideContainer = document.querySelector(".list-images1 > div");

// Hàm hiển thị slide theo chỉ số
function showSlide(index) {
  const offset = -index * 100; // Tính toán khoảng cách dịch chuyển (phần trăm)
  slideContainer.style.transform = `translateX(${offset}%)`;
}

// Hàm chuyển đến slide tiếp theo
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length; // Tăng chỉ số slide
  showSlide(currentSlide);
}

// Hàm chuyển đến slide trước
function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Giảm chỉ số slide
  showSlide(currentSlide);
}

// Thêm sự kiện cho nút "Next" và "Prev"
document.getElementById("next").addEventListener("click", nextSlide);
document.getElementById("prev").addEventListener("click", prevSlide);

// Tự động chuyển slide sau mỗi 4 giây
setInterval(nextSlide, 4000);

// Hiển thị slide đầu tiên
showSlide(currentSlide);