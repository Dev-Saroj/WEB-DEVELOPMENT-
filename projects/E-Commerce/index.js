// const productApi = "https://fakestoreapi.com/products"

// To manipulate some html element in js, we need to catch that first:
// document.getElementById("id_name");
// document.querySelector(".class_name/#id_name");
// document.querySelectorAll();
// document.getElementsByClassName();
// document.getElementsByTagName();

// const productsContainer = document.getElementById("product-container");

// Create element in js:

const productApi = "https://fakestoreapi.com/products";

const section = document.getElementById("products");

const productsContainer = document.createElement("div");
productsContainer.className = "products-container";
section.append(productsContainer);

// Fetch the products API

fetch(productApi)
  .then((res) => {
    return res.json();
  })
  .then((products) => {
    products.forEach((product) => {
      //  Create a new element for each product
      const productElement = document.createElement("div");
      productElement.className = "product";

      // Create an img tag
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.title;
      productImage.className = "product-image";

      // Create a h3 tag for Ttitle
      const productTitle = document.createElement("h3");
      productTitle.textContent = product.title;
      productTitle.className = "product-title";

      // Create a p tag for Price
      const productPrice = document.createElement("p");
      productPrice.textContent = `$ ${product.price}`;
      productPrice.className = "product-price";

      const productButton = document.createElement("button");
      productButton.textContent = "Add to Cart";
      productButton.className = "product-button";
      productButton.addEventListener("click", () => {
        window.location.href = `product.html`;
      });

      // Append elements to product card
      productElement.append(
        productImage,
        productTitle,
        productPrice,
        productButton
      );
      productsContainer.append(productElement);
    });
  })
  .catch((error) => {
    console.log("Error in fetching:", error);
    productsContainer.innerHTML = `<h2> Failed to load products. Please try again later.</h2>`;
  });