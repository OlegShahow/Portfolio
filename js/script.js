"use strict";
// для бургера прописать в html - id для -
// nav , button , img-button

const nav = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const navBtnImg = document.querySelector("#nav-btn-img");

navBtn.onclick = () => {
 if(nav.classList.toggle('open')){
    navBtnImg.src="./nav/navClose.png";
 }
 else{
    navBtnImg.src="./nav/NAV.png";
 }
}
