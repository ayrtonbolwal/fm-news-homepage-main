let burgerButton = document.getElementById("burgerButton");
let closeButton = document.getElementById("closeButton");
let mobileMenu = document.getElementById("mobileMenu");

const deployMenu = () => {
    mobileMenu.style.display = "flex";
}

const closeMenu = () => {
    mobileMenu.style.display = "none";
}

burgerButton.addEventListener("click", deployMenu);
closeButton.addEventListener("click", closeMenu);