// Koden kører når HTML'en er færdig med at loade
document.addEventListener("DOMContentLoaded", () => {
 
  // allData gemmer de produkter man henter fra API'et, så man kan sortere og filtrere dem uden at hente igen
  let allData = [];

  // Hender category fra url (f.eks. ?category=skin-care)
  const params = new URLSearchParams(window.location.search);
  const subcat = params.get("category"); // fx "skin-care"

  // 
  // Et lille opslag, så "beauty" vises som "Makeup" osv.
  const subcatNames = {
    "beauty": "Makeup",
    "skin-care": "Skin Care",
    "fragrances": "Fragrances",
  };
  // Hvis vi ikke kender "slugget", bruger man "slugget" direkte (konverterer enhver streng til en URL-venlig version)
  const categoryName = subcatNames[subcat] || subcat;

  // 
  // Henter <h1> og breadcrumb-listen i DOM'en
  const h1 = document.querySelector("h1");
  const breadcrumbList = document.querySelector(".breadcrumbs");

  // Sæt <h1> til det pæne kategorinavn
  h1.textContent = categoryName;

  // Skriv breadcrumb (Home > Category)
  breadcrumbList.innerHTML = `
    <li><a href="index.html">Home</a></li>
    <li style="margin: 0 5px;">></li>
    <li>${categoryName}</li>
  `;

  // DOM elementer til produkter og filter
  const productListContainer = document.querySelector(".flex"); // hvor produkterne vises
  const filterContainer = document.querySelector("#filters");   // hvor filter-knapperne ligger

  // Bruger dummyjson og henter produkter i den valgte kategori
  fetch(`https://dummyjson.com/products/category/${subcat}?limit=0`)
    .then((response) => response.json()) // konverter svar til JSON
    .then((data) => {
      // Gem produkterne globalt
      allData = data.products;
      // Vis produkterne først gang
      showProducts(allData);
      // Opret filter-knapper baseret på tags fra produkterne
      createFilters(allData);
    })


  // Funktion der viser produkter i DOM'en
  // products: liste af produkt-objekter der skal vises
  function showProducts(products) {
    // Ryd tidligere viste produkter
    productListContainer.innerHTML = "";

    // Loop gennem hvert produkt og tilføj HTML
    products.forEach((element) => {
      // Beregn nedsat pris hvis der er en discountPercentage
      const discountedPrice = element.discountPercentage
        ? Math.round(element.price - (element.price * element.discountPercentage) / 100)
        : null;

      // Tilføj produktkort til produkt-listen
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

  // En funktion der laver filtre ud fra tags
  // products: listen vi bruger til at udtrække tags
  function createFilters(products) {
    // tags: en liste af unikke tags (fx "mascara", "soap" osv.)
    const tags = [...new Set(products.flatMap(p => p.tags || []))];

    // Ryd tidligere filtre
    filterContainer.innerHTML = "";

    // Opret "ALL" knap først ---
    const allBtn = document.createElement("button");
    allBtn.classList.add("filterbtn");
    // Brug første produktbillede som eksempel-billede for "ALL"
    allBtn.innerHTML = `
      <div class="filter-circle">
        <img src="${products[0]?.thumbnail || 'https://via.placeholder.com/160'}" alt="All products">
      </div>
      <h3>ALL</h3>
    `;
    // Når man klikker "ALL" fjernes aktive markeringer og alle produkter vises
    allBtn.addEventListener("click", () => {
      document.querySelectorAll(".filterbtn").forEach(btn => btn.classList.remove("active"));
      allBtn.classList.add("active");
      showProducts(allData);
    });
    filterContainer.appendChild(allBtn);

    // Opret en knap for hvert tag 
    tags.forEach(tag => {
      // Find et eksempelprodukt som indeholder tagget (til billedet)
      const productForTag = products.find(p => (p.tags || []).map(t => t.toLowerCase()).includes(tag.toLowerCase()));
      // Hvis der ikke er produkt, brug en fallback
      const thumb = productForTag?.thumbnail || 'https://via.placeholder.com/160';

      // Lav knappen og indholdet
      const btn = document.createElement("button");
      btn.classList.add("filterbtn");
      btn.innerHTML = `
        <div class="filter-circle">
          <img src="${thumb}" alt="${tag}">
        </div>
        <h3>${tag.toUpperCase()}</h3>
      `;

      // Når man klikker tag-knappen: marker aktiv + filtrer produkter
      btn.addEventListener("click", () => {
        // Fjern "active" fra alle knapper og sæt på denne
        document.querySelectorAll(".filterbtn").forEach(btn => btn.classList.remove("active"));
        btn.classList.add("active");

        // Filtrer products ud fra tag (case-insensitive)
        const filtered = allData.filter(p =>
          (p.tags || []).map(t => t.toLowerCase()).includes(tag.toLowerCase())
        );
        showProducts(filtered);
      });

      filterContainer.appendChild(btn);
    });
  }

  // En funktion der sorteres efter pris
  // Denne funktion sorterer allData og viser den sorterede liste
  function showSorted(event) {
    const direction = event.target.dataset.direction; // læser data-direction fra knappen

    if (direction === "lowhigh") {
      // stigende pris
      allData.sort((a, b) => a.price - b.price);
    } else if (direction === "highlow") {
      // faldende pris
      allData.sort((a, b) => b.price - a.price);
    }

    showProducts(allData);
  }

  // Finder alle knapper inde i #sorting og tilknyt funktionen showSorted
  document
    .querySelectorAll("#sorting button")
    .forEach((btn) => btn.addEventListener("click", showSorted));

});
