const categoryContainer = document.querySelector(".category-container");

// De tre kategorier, du vil vise
const desiredCategories = [
  { name: "Beauty", url: "https://dummyjson.com/products/category/beauty" },
  {
    name: "Fragrances",
    url: "https://dummyjson.com/products/category/fragrances",
  },
  {
    name: "Skin Care",
    url: "https://dummyjson.com/products/category/skin-care",
  },
];

// Hent et produkt fra hver kategori for at få et billede
async function fetchCategoryImages() {
  const categoriesWithImages = [];

  for (const category of desiredCategories) {
    const response = await fetch(`${category.url}?limit=1`);
    const data = await response.json();
    if (data.products && data.products.length > 0) {
      const firstProduct = data.products[0];
      categoriesWithImages.push({
        name: category.name,
        url: category.url,
        image: firstProduct.images[0], // Brug det første billede fra produktet
      });
    }
  }

  showCategories(categoriesWithImages);
}

// Vis kategorierne med billeder
function showCategories(categories) {
  categoryContainer.innerHTML = "";
  let html = "";

  for (const category of categories) {
    html += `
      <div class="category-card">
        <img
          src="${category.image}"
          alt="${category.name}"
          class="img-card"
        />
        <h2 class="category">${category.name}</h2>
        <p class="info">Explore products</p>
        <a href="${category.url}" class="see-products">See products</a>
      </div>
    `;
  }

  categoryContainer.innerHTML = html;
}

// Kald funktionen for at hente billeder og vise kategorier
fetchCategoryImages();
