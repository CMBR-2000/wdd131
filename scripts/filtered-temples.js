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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/aba-nigeria-temple/aba-nigeria-temple-5087-main.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/manti-utah-temple/manti-utah-temple-40551-main.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/payson-utah-temple/payson-utah-temple-38451-main.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/yigo-guam-temple/yigo-guam-temple-26495-main.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/washington-d.c.-temple/washington-d.c.-temple-14992-main.jpg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-temple/lima-peru-temple-12721-main.jpg" 
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mexico-city-mexico-temple/mexico-city-mexico-temple-4060-main.jpg"
    }
];

const templeCards = document.querySelector("#temple-cards");

function displayTemples(templeList) {
    templeCards.innerHTML = "";

    templeList.forEach((temple) => {
        const card = document.createElement("section");

        const name = document.createElement("h3");
        const location = document.createElement("p");
        const dedicated = document.createElement("p");
        const area = document.createElement("p");
        const image = document.createElement("img");

        name.textContent = temple.templeName;
        location.innerHTML = `<span>Location:</span> ${temple.location}`;
        dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span>Area:</span> ${temple.area} sq ft`;

        image.setAttribute("src", temple.imageUrl);
        image.setAttribute("alt", `${temple.templeName} Temple`);
        image.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedicated);
        card.appendChild(area);
        card.appendChild(image);

        templeCards.appendChild(card);
    });
}

displayTemples(temples);

const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
    displayTemples(temples);
});

oldLink.addEventListener("click", () => {
    const oldTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated);
        return year < 1900;
    });

    displayTemples(oldTemples);
});

newLink.addEventListener("click", () => {
    const newTemples = temples.filter((temple) => {
        const year = parseInt(temple.dedicated);
        return year > 2000;
    });

    displayTemples(newTemples);
});

largeLink.addEventListener("click", () => {
    const largeTemples = temples.filter((temple) => temple.area > 90000);

    displayTemples(largeTemples);
});

smallLink.addEventListener("click", () => {
    const smallTemples = temples.filter((temple) => temple.area < 10000);

    displayTemples(smallTemples);
});