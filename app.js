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
