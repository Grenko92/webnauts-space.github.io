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

const wrap = document.querySelector(".wrap");
// let clone1 = document.querySelector(".clone");
// let clone2 = clone1.cloneNode(true);
// let clone3 = clone1.cloneNode(true);
// let a = 0;

// function clone() {
//     a++;
//     console.log(a);
//     wrap.prepend(clone2);
//     wrap.append(clone2);
//     wrap.prepend(clone3);
//     wrap.append(clone3);
// }

// wrap.addEventListener("animationiteration", clone);

// console.log(a);