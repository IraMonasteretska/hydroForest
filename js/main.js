// start common variables
let header = document.querySelector(".header");
let body = document.querySelector("body");
let nav = document.querySelector(".nav");
let navHeight = document.querySelector(".nav__main");
let menuItemProd = document.querySelector(".header__menu-item-prod");
let mobileMenu = document.querySelector(".mobile-menu");
// end common variables

// start height nav
navHeight.style.height = navHeight.scrollHeight / 2 + 200 + "px";
// end height nav

// start hide header
scrollPrev = 0;
window.addEventListener("scroll", () => {
  let scrolled = document.documentElement.scrollTop;

  if (scrolled > 60 && scrolled > scrollPrev) {
    header.classList.add("active");
    nav.classList.add("active");
    mobileMenu.classList.add("active");
    if(document.querySelector('.products__filter')){
      document.querySelector('.products__filter').classList.add("long-header");
    }
  } else if (scrolled < 60) {
    header.classList.remove("active");
    nav.classList.remove("active");
    mobileMenu.classList.remove("active");
    if(document.querySelector('.products__filter')){
      document.querySelector('.products__filter').classList.remove("long-header");
    }
  }
  scrollPrev = scrolled;
});
// end hide header

// start burger menu
if (document.querySelector(".header__burger-cont")) {
  let burgerContainer = document.querySelector(".header__burger-cont");
  let burgerTextOpen = document.querySelector(".header__burger-text-open");
  let burgerTextClosed = document.querySelector(".header__burger-text-closed");
  let burgerIconOpen = document.querySelector(".header__burger-menu-closed");
  let burgerIconClosed = document.querySelector(".header__burger-menu-open");

  burgerContainer.addEventListener("click", () => {
    burgerTextClosed.classList.toggle("hidden");
    burgerTextOpen.classList.toggle("hidden");
    burgerIconOpen.classList.toggle("hidden");
    burgerIconClosed.classList.toggle("hidden");
    mobileMenu.classList.toggle("hidden");
  });
}
// end burger menu

//  start move nav menu
menuItemProd.addEventListener("mouseenter", () => {
  nav.classList.add("visible");
  body.classList.add("scroll");
});
menuItemProd.addEventListener("mouseleave", () => {
  nav.addEventListener("mouseenter", () => {
    nav.classList.add("visible");
    body.classList.add("scroll");
  });
  nav.addEventListener("mouseleave", () => {
    nav.classList.remove("visible");
    body.classList.remove("scroll");
  });
  nav.classList.remove("visible");
  body.classList.remove("scroll");
});
// end move nav menu

// start first letter text js
if (document.querySelector(".fl-text")) {
  const FlText = document.querySelectorAll(".fl-text");
  let FlLetter = document.querySelectorAll(".st-letter");
  for (let i = 0; i < FlText.length; i++) {
    FlLetter[i].textContent = FlText[i].textContent.trim().split("")[0];
    let arrFlText = FlText[i].textContent.trim().split("");
    let text = "";
    let itemCount = 0;
    for (let i of arrFlText) {
      if (itemCount == 0) {
        itemCount++;
        continue;
      }
      text += String(i);
    }
    FlText[i].textContent = text;
  }
}
// end first letter text js

// start tabs functions
if (document.querySelector(".tabs-sliders")) {
  let tabsItemBtn = document.querySelectorAll(".tabs-sliders__tabs-item");
  let tabsItem = document.querySelectorAll(".tabs-sliders__tab");
  let tabsISlider = document.querySelector(".tabs-sliders");
  for (let i = 0; i < tabsItem.length; i++) {
    tabsISlider.style.opacity = "0";
    setTimeout(() => {
      tabsISlider.style.opacity = "1";
      tabsItem[i].style.display = "none";
    }, 2000);

    tabsItemBtn[i].addEventListener("click", () => {
      for (let i = 0; i < tabsItem.length; i++) {
        tabsItemBtn[i].classList.remove("active");
        tabsItem[i].classList.remove("active");
      }
      tabsItemBtn[i].classList.add("active");
      tabsItem[i].classList.add("active");
    });
  }
}
// end tabs functions

// start video function
if (document.querySelector(".video-home__for-video")) {
  let videoFor = document.querySelectorAll(".video-home__for-video");
  let videoForWrapper = document.querySelectorAll(
    ".video-home__for-video-wpap"
  );
  let iconPlayVideoFor = document.querySelectorAll(
    ".video-home__for-icon-play"
  );
  for (let i = 0; i < videoForWrapper.length; i++) {
    iconPlayVideoFor[i].addEventListener("click", () => {
      videoFor[i].play();
      videoFor[i].setAttribute("controls", "controls");
      videoFor[i].parentElement
        .querySelector(".video-home__for-icon-play")
        .classList.add("hidden");
    });
  }
}
// end video function

// start accordion
if (document.querySelector(".accordion")) {
  let acc = document.querySelectorAll(".accordion");

  for (let i of acc) {
    i.addEventListener("click", function () {
      this.classList.toggle("active");
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
}
// end accordion

// start filter product hide/visible
if(document.querySelector('.products ')){
let filterClose = document.querySelector('.products__filter-icon-close')
let filterOpen = document.querySelector('.products__filter-icon-open')
let filterMain = document.querySelector('.products__filter')
let htmlTag = document.querySelector('html')
filterClose.addEventListener('click', () => {
  filterMain.classList.toggle('active')
  htmlTag.style.overflowY = 'hidden'
})
filterOpen.addEventListener('click', () => {
  filterMain.classList.toggle('active')
  htmlTag.style.overflowY = 'visible'
})
}
// end filter product hide/visible