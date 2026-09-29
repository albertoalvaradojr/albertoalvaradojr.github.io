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
// add event in all project buttons
let lastClickedBtn2 = projectBtns[0];

for (let i = 0; i < projectBtns.length; i++) {

  projectBtns[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();

    pages.forEach(element =>{
      if (selectedValue === element.dataset.page) {
        element.classList.add("active");
        window.scrollTo(0, 0);
      } 
      else if(element.classList.contains("active")){
        element.classList.remove("active");
      }
    });

    navigationLinks.forEach(element => {
      if(element != null && element.classList.contains("active")){
        element.classList.remove("active");
      }
    });
   

    lastClickedBtn2 = this;

  });

}


// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const formStatus = document.querySelector("[data-form-status]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}

// Open the visitor's mail app with the form content pre-filled.
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const fullName = formData.get("fullname");
  const email = formData.get("email");
  const message = formData.get("message");
  const subject = encodeURIComponent(`Portfolio contact from ${fullName}`);
  const body = encodeURIComponent(
    `Name: ${fullName}\nEmail: ${email}\n\n${message}`
  );

  window.location.href = `mailto:aajrgs@gmail.com?subject=${subject}&body=${body}`;
  formStatus.textContent = "Your email app should open with this message ready to send.";
  formStatus.classList.add("active");
});



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    //Could optimize, activates page/highlightsNav based on where it is on the index
    //Check if names match, then change
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        if(navigationLinks[i] != null){
          navigationLinks[i].classList.remove("active");
        }
      }
    }
  });
}


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

videos.forEach((video) => {
  const shouldAutoplay = video.hasAttribute("autoplay") && video.muted;

  video.dataset.autoplayVisible = shouldAutoplay ? "true" : "false";
  video.removeAttribute("autoplay");
  videoObserver.observe(video);
});