const productsContainer = document.querySelector(".products-container");
const loadMoreBtn = document.querySelector("#loadMoreBtn"); 

let currentStep = 0;
const LIMIT = 10;
let totalAvailable = null; 

async function fetchListOfProducts(getCurrentStep) {
  try {
    const skip = getCurrentStep === 0 ? 0 : getCurrentStep * LIMIT;
    const response = await fetch(`https://dummyjson.com/products?limit=${LIMIT}&skip=${skip}`);
    const result = await response.json();
    console.log(result);

    if (result && typeof result.total === "number") {
      totalAvailable = result.total;
    }

    if (result && result.products && result.products.length > 0) {
      displayProducts(result.products);
      if (result.products.length < LIMIT || (totalAvailable !== null && productsContainer.children.length >= totalAvailable)) {
        loadMoreBtn.disabled = true;
        loadMoreBtn.textContent = "No more products";
      }
    } else {
      loadMoreBtn.disabled = true;
      loadMoreBtn.textContent = "No more products";
    }
  } catch (e) {
    console.error("Fetch error:", e);
    loadMoreBtn.disabled = true;
    loadMoreBtn.textContent = "Error loading";
  }
}

function displayProducts(productList) {
  productList.forEach((productItem) => {
    const productItemWrapper = document.createElement("div");
    const productTitle = document.createElement("p");
    const productThumbnail = document.createElement("img");
    const productDescription = document.createElement("p");
    const productPrice = document.createElement("p");

    productTitle.textContent = productItem.title;
    productDescription.textContent = productItem.description;
    productThumbnail.src = productItem.thumbnail;
    productThumbnail.alt = productItem.title || "Product image"; 
    productPrice.textContent = `$${productItem.price}`; 

    productItemWrapper.classList.add("product-item-wrapper");
    productTitle.classList.add("product-title");
    productThumbnail.classList.add("product-img");
    productPrice.classList.add("product-price");
    productDescription.classList.add("product-description"); 

    productItemWrapper.appendChild(productThumbnail);
    productItemWrapper.appendChild(productTitle);
    productItemWrapper.appendChild(productPrice);
    productItemWrapper.appendChild(productDescription);

    productsContainer.appendChild(productItemWrapper);
  });

  console.log("Total items displayed:", productsContainer.children.length);
}

fetchListOfProducts(currentStep);

loadMoreBtn.addEventListener("click", () => {
  currentStep += 1;
  fetchListOfProducts(currentStep);
});
