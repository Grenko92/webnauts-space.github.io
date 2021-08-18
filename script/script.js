const openBtnPopupVideo = document.querySelector(".start-screen__btn-video");
const closeBtnPopupVideo = document.querySelector(".start-screen__popup-btn-close");
const closeAreaPopupVideo = document.querySelector(".start-screen__popup-bg-video");
const popupVideo = document.querySelector(".start-screen__popup-video");


function openPopupVideo() {
    popupVideo.classList.remove("hidden");
};

function closePopupVideo() {
    popupVideo.classList.add("hidden");
};

openBtnPopupVideo.addEventListener("click", openPopupVideo);
closeBtnPopupVideo.addEventListener("click", closePopupVideo);
closeAreaPopupVideo.addEventListener("click", closePopupVideo);

// TEST


let testDiv = document.querySelector(".test");
let posDiv = testDiv.getBoundingClientRect();
console.log(window.innerHeight);

function testFunc() {
    console.log(window.innerHeight);
}

window.addEventListener("scroll", testFunc);


// testDiv.getBoundingClientRect()