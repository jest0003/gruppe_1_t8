const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove(".active");
    navMenu.classList.remove(".active");
  })
);

const catlinks = document.querySelector("#catlinks");

/* const desiredCategories = [
  { name: "Makeup", category: "beauty", productId: 3 },
  { name: "Skin Care", category: "skin-care", productId: 118 },
  { name: "Fragrances", category: "fragrances", productId: 10 },
]; */

/* function showCategories(categories) {
  categories.forEach((category) => {
    fetch(`https://dummyjson.com/products/category/${category.category}?limit=1`)
      .then((response) => response.json())
      .then((data) => {
        if (data.products && data.products.length > 0) {
          catlinks.innerHTML += `
          <li class="nav-items">
        <a href="produktliste.html?category=${category.category}" class="nav-link">${category.name}</a>
    </li>
          `;
        }
      });
  });
}

showCategories(desiredCategories); */
