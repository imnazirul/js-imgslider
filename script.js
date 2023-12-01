const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const img_container = document.querySelector(".img-container");
const imgList = document.querySelectorAll(".img-container img");
console.log(imgList);

let currentImg = 1;
let timeout;

prevBtn.addEventListener("click", () => {
  currentImg--;
  clearTimeout(timeout);
  updateImg();
});

nextBtn.addEventListener("click", () => {
  currentImg++;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (currentImg > imgList.length) {
    currentImg = 1;
  } else if (currentImg < 1) {
    currentImg = imgList.length;
  }
  img_container.style.transform = `translateX(-${500 * (currentImg - 1)}px)`;

  timeout = setTimeout(() => {
    currentImg++;
    updateImg();
  }, 3000);
}
