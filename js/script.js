async function fetchProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}

function displayProducts(products) {
  const productGrid = document.getElementById("productGrid");
  productGrid.innerHTML = "";

  products.slice(0, 8).forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");

    productCard.innerHTML = `
            <img src="${product.image}" alt="${
      product.title
    }" class="product-img">
            <span class="name">${product.title}</span>
            <div class="rating">
                ${generateStars(product.rating.rate)}
                <span class="rate">${product.rating.rate} / 5</span>
            </div>
            <span class="price">$${product.price.toFixed(2)}</span>
        `;

    productGrid.appendChild(productCard);
  });
}

function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<img src="./assets/png/Star 1.png" alt="star"> ';
    }
  }
  return stars;
}

fetchProducts();
