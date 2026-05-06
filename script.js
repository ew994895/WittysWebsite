const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.getElementById("nav-links");
const navAnchors = document.querySelectorAll(".nav-links a");
const revealItems = document.querySelectorAll(".reveal");
const currentPage = document.body.dataset.page;

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
  navAnchors.forEach((anchor) => {
    anchor.classList.toggle("active", anchor.dataset.page === currentPage);
  });
}

function revealOnScroll() {
  const trigger = window.innerHeight * 0.92;

  revealItems.forEach((item) => {
    if (item.getBoundingClientRect().top < trigger) {
      item.classList.add("is-visible");
    }
  });
}

if (menuToggle) {
  menuToggle.addEventListener("click", () => toggleMenu());
}

navAnchors.forEach((anchor) => {
  anchor.addEventListener("click", () => toggleMenu(true));
});

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("resize", () => {
  if (window.innerWidth > 820) {
    toggleMenu(true);
  }
});

setActiveNav();
revealOnScroll();
