import "./_components.js";

const headerDrop = document.querySelectorAll(".nav__item--drop");

if (headerDrop.length > 0) {
  function showList(list) {
    if (window.matchMedia("(min-width: 769px)").matches) {
      list.style.padding = "4rem 5rem";
    } else {
      list.style.padding = "2.7rem 2.3rem";
    }
    list.style.border = "1px solid #06c7f4";
    list.style.maxHeight = list.scrollHeight + "px";
  }
  function hideList(list) {
    list.style.maxHeight = null;
    list.style.border = null;
    list.style.padding = null;
  }
  headerDrop.forEach((el) => {
    const innerList = el.querySelector("ul");
    const innerWrapper = el.querySelector(".nav__wrapper");

    if (window.matchMedia("(min-width: 1025px)").matches) {
      el.addEventListener("mouseenter", (e) => {
        showList(innerList);
      });
      el.addEventListener("mouseleave", (e) => {
        hideList(innerList);
      });
    } else {
      el.addEventListener("click", (e) => {
        let active = el.classList.toggle("active");

        active ? showList(innerList) : hideList(innerList);
      });
    }
  });
}
