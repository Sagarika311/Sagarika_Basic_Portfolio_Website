// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Vanta.js Waves Background
document.addEventListener("DOMContentLoaded", () => {
  VANTA.WAVES({
    el: "#waves-background",
    mouseControls: true,
    touchControls: true,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xFFFF6F91,  // 🌸 Light pink (hex code)
    shininess: 50,
    waveHeight: 20,
    waveSpeed: 1,
    zoom: 0.85
  });
});

