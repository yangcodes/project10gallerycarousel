let list = document.querySelector(".list");
let imgs = Array.from(list.children);
const nextBtn = document.querySelector(".btn-right");
const prevBtn = document.querySelector(".btn-left");

//getting imgd width
const imgWidth = imgs[0].getBoundingClientRect().width;
console.log(imgWidth);

//arranging imgs next to each other
function setImgPosition(img, index) {
  img.style.left = imgWidth * index + "px";
}
imgs.forEach(setImgPosition);

//when we click on the right button, move images to the left
nextBtn.addEventListener("click", function () {
  const currentImg = list.querySelector(".current-img");
  const nextImg = currentImg.nextElementSibling;
  const nextIndex = imgs.findIndex(function (img) {
    img === nextImg;
  });

  list.style.transform = "translateX(-" + nextImg.style.left + ")";
  currentImg.classList.remove("current-img");
  nextImg.classList.add("current-img");
});
