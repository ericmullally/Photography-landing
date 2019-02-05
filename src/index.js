const navBtn = document.querySelector(".menu__btn");
const menuBackgrnd = document.querySelector(".menu__back");
const list = document.querySelector(".menu__list");

navBtn.addEventListener("click", () => {
  const lines = navBtn.childNodes;

  if (menuBackgrnd.style.transform === "") {
    menuBackgrnd.style.transform = "scale(60)";
    list.style.right = " 50%";
    lines[1].style.transform = "translate(50%, 10px) rotate(133deg)";
    lines[3].style.display = "none";
    lines[5].style.transform = "translate(50%, -12px) rotate(-131deg)";
  } else {
    menuBackgrnd.style.transform = "";
    list.style.right = "";
    lines[1].style.transform = "";
    lines[3].style.display = "";
    lines[5].style.transform = "";
  }
});
