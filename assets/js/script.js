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
const resumeInput = document.getElementById("resume");
const jobDescriptionInput = document.getElementById("job-description");
const matchResult = document.getElementById("job-match-result");

const normalizeText = function (text) {
  return text
    .toLowerCase()
    .replace(/#/g, " sharp ")
    .replace(/\+/g, " plus ")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
};

const jobSkillAliases = [
  { name: "JavaScript", terms: ["javascript", "js"] },
  { name: "TypeScript", terms: ["typescript", "ts"] },
  { name: "HTML", terms: ["html", "html5"] },
  { name: "CSS", terms: ["css", "css3"] },
  { name: "React", terms: ["react", "react js"] },
  { name: "React Native", terms: ["react native"] },
  { name: "Angular", terms: ["angular"] },
  { name: "Vue", terms: ["vue", "vue js"] },
  { name: "Node.js", terms: ["node js", "node"] },
  { name: "Python", terms: ["python"] },
  { name: "Java", terms: ["java"] },
  { name: "C#", terms: ["c sharp", "csharp"] },
  { name: "C++", terms: ["c plus plus", "cplusplus"] },
  { name: ".NET", terms: ["dotnet", "net", "net framework", "net core"] },
  { name: "SQL", terms: ["sql"] },
  { name: "NoSQL", terms: ["nosql", "no sql"] },
  { name: "Unity", terms: ["unity"] },
  { name: "Unreal Engine", terms: ["unreal engine", "unreal"] },
  { name: "Git", terms: ["git"] },
  { name: "GitHub", terms: ["github"] },
  { name: "WordPress", terms: ["wordpress"] },
  { name: "AWS", terms: ["aws", "amazon web services"] },
  { name: "Azure", terms: ["azure"] },
  { name: "Docker", terms: ["docker"] },
  { name: "Kubernetes", terms: ["kubernetes"] },
  { name: "REST APIs", terms: ["rest api", "rest apis"] },
  { name: "GraphQL", terms: ["graphql"] },
  { name: "UI/UX", terms: ["ui ux", "user interface", "user experience"] },
  { name: "Figma", terms: ["figma"] },
  { name: "Accessibility", terms: ["accessibility", "accessible design"] },
  { name: "Responsive Design", terms: ["responsive design"] },
  { name: "Frontend Development", terms: ["frontend", "front end"] },
  { name: "Backend Development", terms: ["backend", "back end"] },
  { name: "Full-Stack Development", terms: ["full stack", "fullstack"] },
  { name: "Agile", terms: ["agile"] },
  { name: "Scrum", terms: ["scrum"] },
  { name: "Testing", terms: ["testing", "test automation"] },
  { name: "Unit Testing", terms: ["unit testing", "unit tests"] },
  { name: "Debugging", terms: ["debugging", "debug"] },
  { name: "Performance Optimization", terms: ["performance optimization", "optimization"] },
  { name: "Game Development", terms: ["game development", "gameplay programming"] },
  { name: "Artificial Intelligence", terms: ["artificial intelligence", "machine learning", "ai"] },
  { name: "Virtual Reality", terms: ["virtual reality", "vr"] },
  { name: "Augmented Reality", terms: ["augmented reality", "ar"] },
  { name: "WebGL", terms: ["webgl"] },
  { name: "Communication", terms: ["communication", "communicate"] },
  { name: "Collaboration", terms: ["collaboration", "collaborative"] },
  { name: "Teamwork", terms: ["teamwork", "team work"] },
  { name: "Problem Solving", terms: ["problem solving", "problem solving"] },
  { name: "Leadership", terms: ["leadership", "lead"] },
  { name: "Project Management", terms: ["project management"] },
  { name: "Customer Service", terms: ["customer service", "customer support"] },
  { name: "Data Analysis", terms: ["data analysis", "data analytics"] },
  { name: "Technical Writing", terms: ["technical writing", "documentation"] }
];

const stopWords = new Set([
  "the", "and", "for", "with", "that", "this", "from", "into", "your",
  "have", "will", "about", "their", "them", "must", "need", "over", "work",
  "using", "team", "role", "skills", "experience", "years", "year", "day",
  "days", "strong", "ability", "able", "also", "across", "through", "within",
  "including", "responsible", "develop", "developing", "related",
  "responsibilities", "under", "provide", "provides", "etc", "job",
  "description", "resume", "candidate", "business", "people", "good", "great",
  "new", "help", "support", "projects", "project", "high", "quality", "focus",
  "level", "based", "technical", "professional", "working", "knowledge",
  "demonstrated", "individual", "ensure", "ensures", "tasks", "state", "build",
  "building", "you", "our", "who", "what", "when", "where", "how", "are",
  "was", "were", "been", "being", "will", "can", "may", "must", "should",
  "such", "any", "all", "each", "more", "most", "other", "than", "then",
  "they", "its", "not", "but", "use", "used", "across", "both", "per",
  "via", "one", "two", "three", "workplace", "company", "position",
  "required", "requirements", "requirement", "preferred", "minimum", "ideal",
  "join", "looking", "seeking", "qualified", "qualifications", "qualification",
  "candidates"
]);

const containsTerm = function (text, term) {
  return ` ${text} `.includes(` ${term} `);
};

const getJobRequirements = function (jobText) {
  const skills = jobSkillAliases.filter((skill) =>
    skill.terms.some((term) => containsTerm(jobText, normalizeText(term)))
  );
  const skillWords = new Set();

  skills.forEach((skill) => {
    skill.terms.forEach((term) => {
      if (skill.terms.some((alias) => containsTerm(jobText, normalizeText(alias)))) {
        normalizeText(term).split(" ").forEach((word) => skillWords.add(word));
      }
    });
  });

  const keywords = new Set(
    jobText
      .split(" ")
      .filter((word) =>
        word.length > 2 &&
        !/^\d+$/.test(word) &&
        !stopWords.has(word) &&
        !skillWords.has(word)
      )
  );

  return { skills, keywords };
};

const analyzeJobMatch = function (jobDescription, resume) {
  const jobText = normalizeText(jobDescription);
  const resumeText = normalizeText(resume);
  const { skills, keywords } = getJobRequirements(jobText);
  const matchedSkills = skills.filter((skill) =>
    skill.terms.some((term) => containsTerm(resumeText, normalizeText(term)))
  );
  const missingSkills = skills.filter((skill) => !matchedSkills.includes(skill));
  const matchedKeywords = [...keywords].filter((word) => containsTerm(resumeText, word));
  const missingKeywords = [...keywords].filter((word) => !containsTerm(resumeText, word));
  const totalWeight = (skills.length * 2) + keywords.size;
  const matchedWeight = (matchedSkills.length * 2) + matchedKeywords.length;

  return {
    score: totalWeight ? Math.round((matchedWeight / totalWeight) * 100) : null,
    matchedSkills: matchedSkills.map((skill) => skill.name),
    missingSkills: missingSkills.map((skill) => skill.name),
    matchedKeywords,
    missingKeywords
  };
};

const appendTermList = function (container, headingText, terms, emptyText) {
  const section = document.createElement("section");
  section.className = "job-match-section";

  const heading = document.createElement("h4");
  heading.textContent = headingText;
  section.appendChild(heading);

  if (!terms.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.textContent = emptyText;
    section.appendChild(emptyMessage);
  } else {
    const list = document.createElement("ul");
    list.className = "job-match-terms";
    terms.slice(0, 12).forEach((term) => {
      const item = document.createElement("li");
      item.textContent = term;
      list.appendChild(item);
    });
    section.appendChild(list);

    if (terms.length > 12) {
      const more = document.createElement("p");
      more.textContent = `And ${terms.length - 12} more.`;
      section.appendChild(more);
    }
  }

  container.appendChild(section);
};

const updateJobMatch = function () {
  if (!matchResult || !jobDescriptionInput || !resumeInput) return;

  const jobDescription = jobDescriptionInput.value.trim();
  const resume = resumeInput.value.trim();

  matchResult.replaceChildren();

  if (!jobDescription || !resume) {
    matchResult.textContent = "Your match result will appear here.";
    return;
  }

  const result = analyzeJobMatch(jobDescription, resume);

  if (result.score === null) {
    matchResult.textContent =
      "I couldn't identify clear skills or keywords in the job description. Try including the role requirements and responsibilities.";
    return;
  }

  let rating = "Limited alignment";
  if (result.score >= 80) {
    rating = "Strong alignment";
  } else if (result.score >= 65) {
    rating = "Good alignment";
  } else if (result.score >= 45) {
    rating = "Some alignment";
  }

  const summary = document.createElement("h3");
  summary.className = "job-match-score";
  summary.textContent = `${result.score}% — ${rating}`;
  matchResult.appendChild(summary);

  const note = document.createElement("p");
  note.textContent =
    "Estimate based on skills and keywords found in the job description and resume. It is not an ATS result or a hiring prediction.";
  matchResult.appendChild(note);

  appendTermList(
    matchResult,
    `Skills found in both (${result.matchedSkills.length})`,
    result.matchedSkills,
    "No listed skills were found in both texts."
  );
  appendTermList(
    matchResult,
    `Skills to consider adding if accurate (${result.missingSkills.length})`,
    result.missingSkills,
    "No additional listed skills were detected."
  );
  appendTermList(
    matchResult,
    "Other matching keywords",
    result.matchedKeywords,
    "No other matching keywords were detected."
  );
};

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

    if (matchResult) {
      updateJobMatch();
    }
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  updateJobMatch();
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