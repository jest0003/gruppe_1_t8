const categoryList = document.querySelector(".category-container");

const desiredCategories = [
  { name: "Makeup", category: "beauty", productId: 3 },
  { name: "Skin Care", category: "skin-care", productId: 118 },
  { name: "Fragrances", category: "fragrances", productId: 10 },
];

function showCategories(categories) {
  categories.forEach((category) => {
    fetch(
      `https://dummyjson.com/products/category/${category.category}?limit=1`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.products && data.products.length > 0) {
          let imageUrl = data.products[0].images[0];

          categoryList.innerHTML += `
            <div class="category-card">
              <img src="${imageUrl}" alt="${category.name}" class="category-image" />
              <h2>${category.name}</h2>
              <p>Explore products</p>
              <a href="productlist.html?category=${category.category}" class="see-products-button">See Products</a>
            </div>
          `;
        }
      });
  });
}

showCategories(desiredCategories);
