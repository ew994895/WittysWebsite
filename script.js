const typingTarget = document.getElementById("typing-text");
const phrases = [
  "Computer Science Student | Android Developer | Builder of Creative Software Projects",
  "Learning software by building real apps, websites, and client-focused work",
  "Turning coursework, curiosity, and code into a growing developer portfolio"
];

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const currentPage = document.body.dataset.page;

let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeHeroText() {
  if (!typingTarget) {
    return;
  }

  const currentPhrase = phrases[phraseIndex];
  typingTarget.textContent = currentPhrase.slice(0, charIndex);

  if (!deleting && charIndex < currentPhrase.length) {
    charIndex += 1;
    window.setTimeout(typeHeroText, 45);
    return;
  }

  if (!deleting && charIndex === currentPhrase.length) {
    deleting = true;
    window.setTimeout(typeHeroText, 1500);
    return;
  }

  if (deleting && charIndex > 0) {
    charIndex -= 1;
    window.setTimeout(typeHeroText, 22);
    return;
  }

  deleting = false;
  phraseIndex = (phraseIndex + 1) % phrases.length;
  window.setTimeout(typeHeroText, 300);
}

function toggleMenu(forceClose = false) {
  if (!menuToggle || !navLinks) {
    return;
  }

  const willOpen = forceClose ? false : !navLinks.classList.contains("open");
  navLinks.classList.toggle("open", willOpen);
  menuToggle.classList.toggle("is-open", willOpen);
  menuToggle.setAttribute("aria-expanded", String(willOpen));
}

function setActiveNav() {
  if (!currentPage) {
    return;
  }

  navAnchors.forEach((anchor) => {
    anchor.classList.toggle("active", anchor.dataset.page === currentPage);
  });
}

function revealOnScroll() {
  const trigger = window.innerHeight * 0.88;

  revealItems.forEach((item) => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) {
      item.classList.add("is-visible");
    }
  });
}

function filterProjects(category) {
  projectCards.forEach((card) => {
    const matches = category === "all" || card.dataset.category === category;
    card.classList.toggle("is-hidden", !matches);
  });
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => toggleMenu());
}

navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => toggleMenu(true));
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    filterProjects(button.dataset.filter);
  });
});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    toggleMenu(true);
  }
});

setActiveNav();
revealOnScroll();

if (typingTarget) {
  typeHeroText();
}
