
const params = new URLSearchParams(window.location.search);

const hasReview =
    params.has("product") &&
    params.has("rating") &&
    params.has("installation");

let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

if (hasReview) {
    reviewCount++;
    localStorage.setItem("reviewCount", reviewCount);
}

document.querySelector("#reviewCount").textContent = reviewCount;

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modification: ${document.lastModified}`;

if (!hasReview) {
    document.querySelector(".confirmation h2").textContent =
        "No Review Submitted";

    document.querySelector(".confirmation p").textContent =
        "Please complete the product review form first.";
}
