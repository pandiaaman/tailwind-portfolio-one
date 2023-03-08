"use strict";

//automatically updating the nav dots on the left of full screen
function updateList() {
  const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
    return (
      Math.abs(a.getBoundingClientRect().top) -
      Math.abs(b.getBoundingClientRect().top)
    );
  });

  document
    .querySelectorAll(".selected-circle")
    .forEach((c) => c.classList.remove("selected-circle"));

  document
    .querySelectorAll(".selected-nav-item")
    .forEach((c) => c.classList.remove("selected-nav-item"));

  document
    .querySelectorAll(".nav-dot")
    [[...document.querySelectorAll("h1, h2")].indexOf(titles[0])].classList.add(
      "selected-circle"
    );

  document
    .querySelectorAll(".nav-item")
    [[...document.querySelectorAll("h1, h2")].indexOf(titles[0])].classList.add(
      "selected-nav-item"
    );
}

updateList();
window.addEventListener("scroll", () => {
  updateList();
});

//making the header sticky when we cross the hero tab
// const herosectionEl = document.querySelector(".herosection");

// const obs = new IntersectionObserver(
//   function (enteries) {
//     //what should happen when the below mentioned case occurs
//     const ent = enteries[0];
//     // console.log(ent);
//     if (ent.isIntersecting === false) {
//       document.querySelector(".header").classList.add("sticky top-0");
//     } else if (ent.isIntersecting === true) {
//       document.querySelector(".header").classList.remove("sticky top-0");
//     }
//   },
//   {
//     root: null, //means observing the viewport
//     threshold: 0, //when herosection is completely outside viewport
//     rootMargin: "-80px",
//   }
// );
// obs.observe(herosectionEl);

//on clicking menu button opens the menu
const navmenu = document.querySelector(".navmenu");
const menubutton = document.querySelector(".menubutton");
const closemenu = document.querySelector(".closemenu");

menubutton.addEventListener("click", () => {
  navmenu.classList.toggle("opacity-0");
  menubutton.classList.toggle("hidden");
  closemenu.classList.toggle("hidden");
});

closemenu.addEventListener("click", () => {
  navmenu.classList.toggle("opacity-0");
  menubutton.classList.toggle("hidden");
  closemenu.classList.toggle("hidden");
});

const navitem = document.querySelectorAll(".nav-item");

navitem.forEach((a) => {
  a.addEventListener("click", () => {
    navmenu.classList.toggle("opacity-0");
    menubutton.classList.toggle("hidden");
    closemenu.classList.add("hidden");
  });
});
