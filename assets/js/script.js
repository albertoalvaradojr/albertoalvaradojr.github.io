'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const projectBtns = document.querySelectorAll("[data-project-btn]");


select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}



// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
    console.log(selectedValue)
  });

}
// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

const activatePage = function (pageName) {
  const targetPage = Array.from(pages).find(
    (page) => page.dataset.page === pageName
  );

  if (!targetPage) return;

  pages.forEach((page) => {
    if (page === targetPage) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  });

  navigationLinks.forEach((link) => {
    if (link.textContent.trim().toLowerCase() === pageName) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  window.scrollTo(0, 0);
};

navigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    activatePage(link.textContent.trim().toLowerCase());
  });
});

projectBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const projectTitle = button.querySelector(".project-title");
    if (projectTitle) {
      activatePage(projectTitle.textContent.trim().toLowerCase());
    }
  });
});

/*
VIDEO STUFF
*/

// Only autoplay muted videos while they are visible in the viewport.
// Videos with controls can still be started manually, but pause when scrolled away.
const videos = document.querySelectorAll("video");

const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const video = entry.target;

    if (entry.isIntersecting && entry.intersectionRatio >= 0.25) {
      if (video.dataset.autoplayVisible === "true") {
        video.play().catch(() => {
          // Browsers may reject autoplay when a video is not muted.
        });
      }
    } else {
      video.pause();
    }
  });
}, {
  threshold: [0, 0.25]
});

// Initialize autoplay behavior for videos based on their visibility in the viewport.
videos.forEach((video) => {
  const shouldAutoplay = video.hasAttribute("autoplay") && video.muted;

  video.dataset.autoplayVisible = shouldAutoplay ? "true" : "false";
  video.removeAttribute("autoplay");
  videoObserver.observe(video);
});