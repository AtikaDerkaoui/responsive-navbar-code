const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const navLinks = document.querySelector(".nav-links-container");
const menuOverlay = document.getElementById("menu-overlay");

function openMenu(){
    navLinks.classList.add("active");
    menuOverlay.classList.add("active");

}
function closeMenu(){
    navLinks.classList.remove("active");
    menuOverlay.classList.remove("active");
}

menuToggle.addEventListener("click", openMenu);
menuClose.addEventListener("click", closeMenu);

navLinks.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", closeMenu);
});
menuOverlay.addEventListener("click", closeMenu);