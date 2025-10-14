const categoryList = document.querySelector(".category-container");

const desiredCategories = [
  { name: "Makeup", category: "beauty" },
  { name: "Skin Care", category: "skin-care" },
  { name: "Fragrances", category: "fragrances" },
];

function showCategories(categories) {
  categories.forEach((category, index) => {
    fetch(
      `https://dummyjson.com/products/category/${category.category}?limit=1`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.products && data.products.length > 0) {
          let imageUrl = data.products[0].images[0];

          const categoryCard = document.createElement("div");
          categoryCard.className = "category-card";
          categoryCard.innerHTML = `
            <img src="${imageUrl}" alt="${category.name}" class="category-image" />
            <h2>${category.name}</h2>
            <p>Explore products</p>
            <a href="productlist.html?category=${category.category}" class="see-products-button">See Products</a>
          `;

          // sætter vores cards i den rigtige rækkefølge //
          if (index === 0) {
            categoryList.innerHTML = "";
            categoryList.appendChild(categoryCard);
          } else {
            categoryList.appendChild(categoryCard);
          }
        }
      });
  });
}

showCategories(desiredCategories);
