// Toggle floating popup menu with a class
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

// Carousel categories with links
const categories = {
  "Instagram": [
    { img: "assets/insta1.png", link: "https://www.instagram.com/reel/DNcgvQIs7NG/?utm_source=ig_web_copy_link&igsh=ZG44ZWFpNXlic2Mx" },
    { img: "assets/insta2.png", link: "https://www.instagram.com/reel/DG7tC0EBe6D/?utm_source=ig_web_copy_link&igsh=ZmZxeG5mMjNtanBr" },
    { img: "assets/insta3.png", link: "https://www.instagram.com/p/DNnipnjRax9/?utm_source=ig_web_copy_link&igsh=MWg3cWw3MjY3OG1xbA==" },
    { img: "assets/insta4.png", link: "https://www.instagram.com/p/DN8GJMPkdZp/?utm_source=ig_web_copy_link&igsh=azVsNzRsZ2p4MzRs" }
  ],
  "Podcasts": [
    { img: "assets/insta2.png", link: "#" },
    { img: "assets/insta4.png", link: "#" },
    { img: "assets/insta1.png", link: "#" },
    { img: "assets/insta3.png", link: "#" }
  ],
  "News Coverage": [
    { img: "assets/insta4.png", link: "#" },
    { img: "assets/insta2.png", link: "#" },
    { img: "assets/insta3.png", link: "#" },
    { img: "assets/insta1.png", link: "#" }
  ]
};

let currentIndex = 0;
const keys = Object.keys(categories);

function loadCategory() {
  const category = keys[currentIndex];
  document.getElementById("category").textContent = category;
  const grid = document.getElementById("grid");
  grid.innerHTML = "";

  categories[category].forEach(item => {
    const a = document.createElement("a");
    a.href = item.link;
    a.target = "_blank"; // opens Instagram in new tab/app

    const img = document.createElement("img");
    img.src = item.img;
    img.loading = "lazy";

    a.appendChild(img);
    grid.appendChild(a);
  });
}

function nextCategory() {
  currentIndex = (currentIndex + 1) % keys.length;
  loadCategory();
}

// Load initial category
window.onload = loadCategory;
