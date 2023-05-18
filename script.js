// Nav Responsive
let nav = document.querySelector(".nav-container");
let navRes = document.querySelector(".nav-res");
let navResTop = document.querySelector(".res-top");
let navResMid = document.querySelector(".res-mid");
let navResBot = document.querySelector(".res-bot");
let navLinks = document.querySelector(".nav-links");
let navSocials = document.querySelector(".nav-socials");

navRes.onclick = function () {
  nav.classList.toggle("nav-shadow");
  navLinks.classList.toggle("nav-muncul");
  navSocials.classList.toggle("nav-muncul");
  navResTop.classList.toggle("top-active");
  navResMid.classList.toggle("mid-active");
  navResBot.classList.toggle("bot-active");
};

// Auto Change Active Navbar
const allSections = document.querySelectorAll("section");
const navLinksA = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function () {
  let currentPage = "";
  allSections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 7.5) {
      currentPage = section.getAttribute("id");
    }
  });

  navLinksA.forEach((a) => {
    a.classList.remove("nav-active");
    if (a.classList.contains(currentPage)) {
      a.classList.add("nav-active");
    }
  });
});

// Skills Tab
function openSkills(event, skillName) {
  const tabContent = document.querySelectorAll(".tab-content");
  let i;
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  const tabBtn = document.querySelectorAll(".tab-btn");
  for (i = 0; i < tabBtn.length; i++) {
    tabBtn[i].className = tabBtn[i].className.replace(" tab-active", "");
  }

  document.getElementById(skillName).style.display = "grid";
  event.currentTarget.className += " tab-active";
}
