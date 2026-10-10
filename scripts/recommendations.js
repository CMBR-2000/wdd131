const restaurants = [
    
    {
        name: "Casa Gangotena",
        region: "sierra",
        location: "Quito, Pichincha",
        description: "An elegant restaurant offering Ecuadorian cuisine inspired by local ingredients and traditional flavors.",
        image: "../images/casa-gangotena.webp"
    },
    {
        name: "De La Llama",
        region: "sierra",
        location: "Quito, Pichincha",
        description: "A restaurant combining Ecuadorian ingredients with modern cooking techniques.",
        image: "../images/de-la-llama.webp"
    },
    {
        name: "Achiote",
        region: "sierra",
        location: "Quito, Pichincha",
        description: "A restaurant known for Ecuadorian dishes, traditional seasonings, and a welcoming atmosphere.",
        image: "../images/achiote.webp"
    },
    {
        name: "URKO",
        region: "sierra",
        location: "Quito, Pichincha",
        description: "A restaurant celebrating Ecuadorian biodiversity through innovative cuisine.",
        image: "../images/urko.webp"
    },
    {
        name: "Raymipampa",
        region: "sierra",
        location: "Cuenca, Azuay",
        description: "A traditional restaurant offering Ecuadorian food in Cuenca's historic center.",
        image: "../images/raymipampa.webp"
    },

    
    {
        name: "Lo Nuestro",
        region: "coast",
        location: "Guayaquil, Guayas",
        description: "A restaurant offering traditional Ecuadorian cuisine and coastal specialties.",
        image: "../images/lo-nuestro.webp"
    },
    {
        name: "Sol de Manta",
        region: "coast",
        location: "Guayaquil, Guayas",
        description: "A seafood restaurant inspired by the traditional flavors of Ecuador's coast.",
        image: "../images/sol-de-manta.webp"
    },
    {
        name: "Red Crab",
        region: "coast",
        location: "Guayaquil, Guayas",
        description: "A popular restaurant specializing in crab and traditional seafood dishes.",
        image: "../images/red-crab.webp"
    },
    {
        name: "Fish Restaurant Cordoba",
        region: "coast",
        location: "Manta, Manabí",
        description: "A restaurant offering seafood inspired by the food traditions of Manabí.",
        image: "../images/fish-cordoba.webp"
    },
    {
        name: "Marrecife",
        region: "coast",
        location: "Guayaquil, Guayas",
        description: "A restaurant where visitors can enjoy Ecuadorian coastal flavors and seafood.",
        image: "../images/marrecife.webp"
    },

    
    {
        name: "Nativa Comida Típica Amazónica",
        region: "amazon",
        location: "Puyo, Pastaza",
        description: "A restaurant specializing in traditional Amazonian cuisine and regional ingredients.",
        image: "../images/nativa.webp"
    },
    {
        name: "Restaurant La Fogata",
        region: "amazon",
        location: "Tena, Napo",
        description: "A restaurant offering Ecuadorian food in the Amazon region.",
        image: "../images/la-fogata.webp"
    },
    {
        name: "Uchumanka",
        region: "amazon",
        location: "Puyo, Pastaza",
        description: "A restaurant where visitors can discover Amazonian food and culinary traditions.",
        image: "../images/uchumanka.webp"
    },
    {
        name: "La Hacienda Restaurante",
        region: "amazon",
        location: "Puyo, Pastaza",
        description: "A restaurant offering Ecuadorian dishes and grilled food in a family-friendly atmosphere.",
        image: "../images/la-hacienda.webp"
    },
    {
        name: "Jungla Amazon Pub",
        region: "amazon",
        location: "Puyo, Pastaza",
        description: "A casual restaurant and pub offering food in a relaxed Amazonian setting.",
        image: "../images/jungla-amazon.webp"
    },

    
    {
        name: "Eloise Restaurante Galápagos",
        region: "galapagos",
        location: "Puerto Ayora, Santa Cruz",
        description: "A waterfront restaurant offering a memorable island dining experience.",
        image: "../images/eloise.webp"
    },
    {
        name: "Origen Galapagos",
        region: "galapagos",
        location: "Puerto Ayora, Santa Cruz",
        description: "A restaurant offering a variety of dishes in a welcoming island atmosphere.",
        image: "../images/origen-galapagos.webp"
    },
    {
        name: "Agave Studio",
        region: "galapagos",
        location: "Puerto Ayora, Santa Cruz",
        description: "A restaurant offering creative cuisine and a distinctive dining experience.",
        image: "../images/agave-studio.webp"
    },
    {
        name: "Fished Galapagos Seafood House",
        region: "galapagos",
        location: "Puerto Ayora, Santa Cruz",
        description: "A seafood restaurant offering dishes inspired by the ocean and island traditions.",
        image: "../images/fished-galapagos.webp"
    },
    {
        name: "Laguna Beach",
        region: "galapagos",
        location: "Puerto Ayora, Santa Cruz",
        description: "A restaurant offering Ecuadorian food in a relaxing island atmosphere.",
        image: "../images/laguna-beach.webp"
    }
];


/* SELECT HTML ELEMENTS */

const restaurantContainer = document.querySelector(
    "#restaurant-container"
);

const filterButtons = document.querySelectorAll(
    ".filter-buttons button"
);

const restaurantCount = document.querySelector(
    "#restaurant-count"
);

/* CREATE RESTAURANT CARDS */

function displayRestaurants(restaurantList) {

    restaurantContainer.innerHTML = "";

    restaurantList.forEach((restaurant) => {

        const card = document.createElement("article");
        card.classList.add("restaurant-card");

        const image = document.createElement("img");
        image.src = restaurant.image;
        image.alt = `${restaurant.name} restaurant`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 260;

        const title = document.createElement("h3");
        title.textContent = restaurant.name;

        const location = document.createElement("p");

        const locationLabel = document.createElement("strong");
        locationLabel.textContent = "Location: ";

        location.appendChild(locationLabel);
        location.append(restaurant.location);

        const description = document.createElement("p");
        description.textContent = restaurant.description;

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(location);
        card.appendChild(description);

        restaurantContainer.appendChild(card);
    });

    restaurantCount.textContent =
        `Showing ${restaurantList.length} restaurants`;
}

/* FILTER RESTAURANTS */

function filterRestaurants(region) {

    let filteredRestaurants;

    if (region === "all") {
        filteredRestaurants = restaurants;
    } else {
        filteredRestaurants = restaurants.filter(
            (restaurant) => restaurant.region === region
        );
    }

    // SAVE SELECTED REGION
    localStorage.setItem("selectedRegion", region);

    // DISPLAY RESTAURANTS
    displayRestaurants(filteredRestaurants);

    // UPDATE ACTIVE BUTTON
    filterButtons.forEach((button) => {

        const isSelected = button.dataset.region === region;

        button.setAttribute(
            "aria-pressed",
            String(isSelected)
        );
    });
}

/* BUTTON EVENTS */

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const selectedRegion = button.dataset.region;

        filterRestaurants(selectedRegion);
    });
});

/* RESTORE SAVED REGION */

const savedRegion = localStorage.getItem("selectedRegion");

const validRegions = [
    "all",
    "sierra",
    "coast",
    "amazon",
    "galapagos"
];

const initialRegion = validRegions.includes(savedRegion)
    ? savedRegion
    : "all";

// DISPLAY RESTAURANTS WHEN PAGE LOADS
filterRestaurants(initialRegion);


/* =========================================
   RESTAURANT RECOMMENDATION FORM
   ========================================= */

const recommendationForm = document.querySelector(
    "#recommendation-form"
);

const formMessage = document.querySelector("#form-message");

recommendationForm.addEventListener("submit", (event) => {

    // Prevent page reload
    event.preventDefault();

    // Get form values
    const formData = new FormData(recommendationForm);

    const name = formData.get("fullName").trim();
    const restaurant = formData.get("restaurantName").trim();

    // Show confirmation message
    formMessage.textContent =
        `Thank you, ${name}! Your recommendation for ${restaurant} has been entered in this demo.`;

    // Clear form fields
    recommendationForm.reset();
});
