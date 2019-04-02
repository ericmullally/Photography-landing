const navBtn = document.querySelector(".menu__btn");
const menuBackground = document.querySelector(".menu__back");
const list = document.querySelector(".menu__list");

const getScrollPos = () => {
  return document.documentElement.scrollTop;
};

navBtn.addEventListener("click", () => {
  const lines = navBtn.childNodes;

  if (menuBackground.style.transform === "") {
    menuBackground.style.transform = "scale(60)";
    list.style.right = " 50%";
    lines[1].style.transform = "translate(50%, 10px) rotate(133deg)";
    lines[3].style.display = "none";
    lines[5].style.transform = "translate(50%, -12px) rotate(-131deg)";
  } else {
    menuBackground.style.transform = "";
    list.style.right = "";
    lines[1].style.transform = "";
    lines[3].style.display = "";
    lines[5].style.transform = "";
  }
});
const positionFromTop = this.addEventListener("scroll", e => {
  console.log(getScrollPos());
});
