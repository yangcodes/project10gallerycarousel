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

//moveToImg function
const moveToImg = function (list, currentImg, targetImg) {
  list.style.transform = "translateX(-" + targetImg.style.left + ")";
  currentImg.classList.remove("current-img");
  targetImg.classList.add("current-img");
};

//when we click on the right button, move images to the left
nextBtn.addEventListener("click", function () {
  const currentImg = list.querySelector(".current-img");
  const nextImg = currentImg.nextElementSibling;
  const nextIndex = imgs.findIndex(function (img) {
    img === nextImg;
  });
  moveToImg(list, currentImg, nextImg);
});

/*list.style.transform = "translateX(-" + nextImg.style.left + ")";
  currentImg.classList.remove("current-img");
  nextImg.classList.add("current-img");
}); */

//when we click on the left button, move images to the right
prevBtn.addEventListener("click", function () {
  const currentImg = list.querySelector(".current-img");
  const prevImg = currentImg.previousElementSibling;
  const prevIndex = imgs.findIndex(function (img) {
    img === prevImg;
  });
  moveToImg(list, currentImg, prevImg);
});
/*list.style.transform = "translateX(-" + prevImg.style.left + ")";
  currentImg.classList.remove("current-img");
  prevImg.classList.add("current-img");
}); */
