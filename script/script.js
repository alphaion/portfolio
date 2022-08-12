// Navigation Menu
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});

AOS.init();

const items = ["./res/images/heroImg01.svg", "./res/images/heroImg02.svg", "./res/images/heroImg03.svg", "./res/images/heroImg04.svg", "./res/images/heroImg05.svg"];

function random_item(items) {
    return items[Math.floor(Math.random() * items.length)];
}
document.getElementById('mainImg').srcset = random_item(items);