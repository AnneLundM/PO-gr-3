const images = [
  "assets/headerslider/01.jpg",
  "assets/headerslider/02.jpg",
  "assets/headerslider/03.jpg",
  "assets/headerslider/04.jpg",
];

let currentIndex = 0;
const slideImage = document.getElementById("slideImage");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");

prevButton.addEventListener("click", () => {
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  slideImage.src = images[currentIndex];
});

nextButton.addEventListener("click", () => {
  currentIndex += 1;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  slideImage.src = images[currentIndex];
});
