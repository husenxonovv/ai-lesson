// =====================================================
// PORTFOLIO — app.js
// Mobile nav toggle + active link highlighting + one
// subtle entrance moment for the hero.
// =====================================================

document.addEventListener("DOMContentLoaded", () => {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close menu after choosing a link (mobile)
    links.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => links.classList.remove("open"));
    });
  }

  // Highlight the current page in the nav
  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // One deliberate entrance for the hero on the home page
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = "0";
    hero.style.transform = "translateY(12px)";
    hero.style.transition = "opacity .6s ease, transform .6s ease";
    requestAnimationFrame(() => {
      hero.style.opacity = "1";
      hero.style.transform = "translateY(0)";
    });
  }
});