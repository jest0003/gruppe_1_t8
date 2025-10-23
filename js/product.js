document.addEventListener("DOMContentLoaded", () => {
    //----fetching.
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    const subcat = params.get("category");

    // const produkt= await fetch (`https://dummyjson.com/products/category/${subcat}?limit=0`); async/await  hvad industrien bruger!

    fetch(`https://dummyjson.com/products/category/${subcat}?limit=0`)
        .then((response) => response.json()) // .then((response) => { return response.json() });
        .then((json) => {
            const products = json.products;
            const product = products.find((element) => element.id == id);
            return product;
        })
        .then((product) => {
            console.log(product);
            // now start chaning the html

            const productBox = document.querySelector(".product-box");
        const description = document.querySelector(".desription_card");
        const review = document.querySelector(".review");

      // Beregn nedsat pris hvis der er en discountPercentage
      const discountedPrice = product.discountPercentage
        ? Math.round(product.price - (product.price * product.discountPercentage) / 100)
        : product.price;

        productBox.innerHTML +=
         `<div class="gallery">
          <div class="small-img">
            <img class="thumb activated" src="${product.images[0]}" alt="">
            <img class="thumb" src="${product.images[1] || product.images[0]}" alt="">
            <img class="thumb" src="${product.images[2] || product.images[0]}" alt="">
          </div>
          <img id="big-img" src="${product.images[0]}" alt="">
        </div>
        <div id="right-side">
          <h1>${product.title}</h1>
          <p id="pricetag">
  ${product.discountPercentage ? 
    `<span class="old-price">${product.price} €</span>
    <span class="discounted-price">NOW ${discountedPrice} €</span>` 
    : 
    `${product.price} €`
  }
</p>
          <div><a href="#" id="minus">-</a><a id="amount">1</a><a href="#" id="plus">+</a> <a class="add-to-bag" href="#">Add to bag</a></div>
          <div class="in-stock"><button id="green-red" style="background-color:${product.stock > 0 ? 'green' : 'red'}"></button><p>${product.stock > 0 ? 'In stock' : 'Out of stock'}</p></div>
        </div>`;
        description.innerHTML =
        `<div>
          <h2>Description</h2>
          <p>${product.description}</p>
        </div>
        <div>
          <h2>Ingredienser</h2>
          <p>liste af ingredienser og andet godt lol. <br>Der er desværre ingen at hente fra json listen</p>
        </div>
        <div>
          <h2>Why you'll love it</h2>
          <ul>
            <li>Reason one</li>
            <li>Reason two</li>
            <li>Reason three</li>
          </ul>
        </div>`

        product.reviews.forEach((reviewItem) => {
  review.innerHTML += 
  `<section class="review_card">
  <article class="flex-r">
  <div class="logon">
      <img src="img/persona.webp" alt="" />
    </div>
    <div>
      <p>Rating: ${reviewItem.rating}</p>
      <p>${reviewItem.reviewerName}</p>
    </div>
  </article>
  <p class="gap">${reviewItem.comment}</p>
  </article></section>`;
});

 ///---gallery
    
    const thumbnails = document.querySelectorAll(".thumb");
    const bigImg = document.querySelector("#big-img");

    thumbnails.forEach(thumb => {
        thumb.addEventListener("click", () => {
   bigImg.src = thumb.src;

    thumbnails.forEach(t => t.classList.remove("activated"));
    thumb.classList.add("activated");
        });
    });
//plus minus knap----------------

    const minus = document.querySelector("#minus");
    const plus = document.querySelector("#plus");
    const amount = document.querySelector("#amount");

    let count = 1;

    plus.addEventListener("click", (e) => {
        e.preventDefault();
        count++;
        amount.textContent = count;
    });

    minus.addEventListener("click", (e) => {
        e.preventDefault();
        if (count > 1) {
            count--;
        amount.textContent = count;}
    });

        });
        });

