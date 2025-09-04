// Toggle overlay menu
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// Carousel categories
const categories = {
  "Instagram": ["assets/insta1.jpg","assets/insta2.jpg","assets/insta3.jpg","assets/insta4.jpg"],
  "Podcasts": ["assets/pod1.jpg","assets/pod2.jpg","assets/pod3.jpg","assets/pod4.jpg"],
  "News Coverage": ["assets/news1.jpg","assets/news2.jpg","assets/news3.jpg","assets/news4.jpg"]
};
let currentIndex = 0;
const keys = Object.keys(categories);

function loadCategory() {
  const category = keys[currentIndex];
  document.getElementById("category").textContent = category;
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  categories[category].forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.loading = "lazy";
    grid.appendChild(img);
  });
}
function nextCategory() {
  currentIndex = (currentIndex + 1) % keys.length;
  loadCategory();
}

// Load initial category
window.onload = loadCategory;
