var contactModal = document.getElementById("modal");
var imgModal = document.getElementById("appImgModal");

var img = document.getElementsByClassName("app-image");
var closeBtn = document.getElementById("close");
var prev = document.getElementById("chevLeft");
var next = document.getElementById("chevRight");
var index = 0;

let fmImgs = ["pics/FM/Launch.jpg", "pics/FM/List.jpg", "pics/FM/Search.jpg"];

var stagedImgs = [
  "pics/Staged/Staged-Search.jpg",
  "pics/Staged/Staged-List",
  "pics/Staged/Staged-Recipe",
];

var gibliImgs = [
  "pics/Ghibli/Launch.jpg",
  "pics/Ghibli/List.jpg",
  "pics/Ghibli/Details.jpg",
];

var snakeImgs = [
  "pics/Snake/Snake-Start.jpg",
  "pics/Snake/Snake-GamePlay.jpg",
  "pics/Snake/Snake-GameOver.jpg",
];

function showContactModal() {
  contactModal.style.display = "block";
}

function dismissModal() {
  contactModal.style.display = "none";
}

function showImageModal() {
  imgModal.style.display = "flex";
  console.log(img.index);
}

function dismissImgModal() {
  imgModal.style.display = "none";
}

function showPreviousImage() {
  console.log("back yonder fucker");
}

function showNextImage() {
  console.log("up yonder fucker");
}

document.addEventListener("keydown", escHandler, false);
function escHandler(e) {
  if (e.key == "Escape") {
    modal.style.display = "none";
    imgModal.style.display = "none";
  }
}

const slidesContainer = document.getElementById("slideContainer");
const slide = document.querySelector(".slideImage");
const prevButton = document.getElementById("chevLeft");
const nextButton = document.getElementById("chevRight");

nextButton.addEventListener("click", () => {
  console.log("next");
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});

prevButton.addEventListener("click", () => {
  console.log("prev");
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
