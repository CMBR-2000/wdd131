const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
});

const currentYear = document.querySelector("#currentyear");

currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");

lastModified.textContent = `Last Modification: ${document.lastModified}`;