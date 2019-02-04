const navBtn = document.querySelector(".menu__btn");
const menuBackgrnd = document.querySelector(".menu__back");
const list = document.querySelector(".menu__list");

navBtn.addEventListener("click", () => {
  if (menuBackgrnd.style.transform === "") {
    menuBackgrnd.style.transform = "scale(60)";
    list.style.right = " 50%";
    navBtn.childNodes[1].style.transform = "rotate(45deg)";
    navBtn.childNodes[3].style;
    navBtn.childNodes[5].style;
  } else {
    menuBackgrnd.style.transform = "";
    list.style.right = "";
  }
});
console.log(navBtn.childNodes[1]);
// top:50%;
// transform: translate(50%, -50%) rotate(45%);
