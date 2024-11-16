import "./_components.js";
import { createPopper, offset } from "@popperjs/core";
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

const changePos = {
  name: 'changePos',
  enabled: true,
  phase: 'main',

  fn({state}){
    if(state.placement == 'top'){
      state.elements.popper.classList.add('tooltip--top')
    }
  }
}

const tLink = document.querySelectorAll('.sch-item__more')
let posSpace = window.innerWidth / 192
let widthWind = window.innerWidth
window.addEventListener('resize', e => {
  posSpace = window.innerWidth / 192
  widthWind = window.innerWidth
})
tLink.forEach(el => {
  let tooltip = el.querySelector('.tooltip')
  let flag = false
  function handleClick(e){
    tLink.forEach(el => {
      let tooltip = el.querySelector('.tooltip')
      tooltip.style.opacity = null
      tooltip.style.visibility = null
    })
    e.preventDefault()

    if(flag) {
      flag = false
      return
    }
    tooltip.style.opacity = 1
    tooltip.style.visibility = 'visible'

    flag = true
  }
  if(widthWind < 1025){
    el.addEventListener('click', handleClick)
  } else {
    el.removeEventListener('click', handleClick)
  }
  const offset = [-100, 9]

  if(widthWind < 577){
    offset[0] = 0
    offset[1] = 14
  }
  createPopper(el, tooltip, {
    placement: 'bottom',
    modifiers: [{
      name: 'offset',
      options: {
        offset: offset
      }
    }, changePos]
  })
})
