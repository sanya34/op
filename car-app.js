document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    const imageSrc = decodeURIComponent(params.get('image'));
    const itemName = decodeURIComponent(params.get('name'));
    const itemDescription = decodeURIComponent(params.get('description'));
    const itemPrice = decodeURIComponent(params.get('price'));

    const productDetailsContainer = document.getElementById('product-details');

    // Create elements to display product details
    const productImage = document.createElement('img');
    productImage.src = imageSrc;
    productImage.alt = `Product ${productId}`;

    const productName = document.createElement('h2');
    productName.textContent = itemName;

    const productDescription = document.createElement('p');
    productDescription.textContent = itemDescription;

    const productPrice = document.createElement('p');
    productPrice.textContent = itemPrice;

    // Append elements to the product details container
    productDetailsContainer.appendChild(productImage);
    productDetailsContainer.appendChild(productName);
    productDetailsContainer.appendChild(productDescription);
    productDetailsContainer.appendChild(productPrice);
});