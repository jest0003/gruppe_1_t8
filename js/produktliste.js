document.addEventListener("DOMContentLoaded", () => {
  // Hent URL-parametre
  const params = new URLSearchParams(window.location.search);
  const subcat = params.get("category"); // ← her får man feks "skin-care"

  // Lav et pænt navn baseret på subcat
  const prettyNames = {
    "beauty": "Makeup",
    "skin-care": "Skin Care",
    "fragrances": "Fragrances"
  };
  const categoryName = prettyNames[subcat] || subcat; // fallback hvis ny kategori

  // Sæt overskrift
  document.querySelector("h2").textContent = categoryName;

  const productListContainer = document.querySelector(".flex");

  // Hent produkter fra API
  fetch(`https://dummyjson.com/products/category/${subcat}?limit=0`)
    .then((response) => response.json())
    .then((data) => showProducts(data.products))
    .catch((error) => console.error("Fejl ved fetch:", error));

  function showProducts(products) {
    productListContainer.innerHTML = "";

    products.forEach((element) => {
      const discountedPrice = element.discountPercentage
        ? Math.round(element.price - (element.price * element.discountPercentage) / 100)
        : null;

      productListContainer.innerHTML += `
        <div class="product_item ${element.stock === 0 ? "sold-out" : ""}">
          <img src="${element.thumbnail}" alt="${element.title}">
          <h3>${element.title}</h3>
          <p class="category">${element.description}</p>

          ${element.discountPercentage ? `
            <p class="price">€${element.price}</p>
            <div class="sale">
              <p>Now €${discountedPrice}</p>
              <p>-${element.discountPercentage}%</p>
            </div>
          ` : `
            <p class="price">€${element.price}</p>
          `}

          <div class="produktbtn flex">
            <a href="produkt.html?id=${element.id}">READ MORE</a>
            <a href="#">ADD TO BAG</a>
          </div>
        </div>
      `;
    });
  }
});