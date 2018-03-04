---
---

function toggleMenu() {
    var menuItems = document.getElementById("menu-items");
    var menuToggle = document.getElementById("menu-toggle");
    menuItems.classList.toggle("closed");
    menuToggle.classList.toggle("open");
}