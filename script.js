// بيانات المنتجات (سيتم تخزينها في LocalStorage)
let products = JSON.parse(localStorage.getItem('products')) || [];

// عرض المنتجات في الصفحة الرئيسية
function displayProducts() {
  const productsDiv = document.getElementById('products');
  productsDiv.innerHTML = '';
  products.forEach((product, index) => {
    productsDiv.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>السعر: ${product.price} ريال</p>
        <button onclick="addToCart(${index})">أضف إلى السلة</button>
      </div>
    `;
  });
}

// إضافة منتج إلى السلة
let cart = JSON.parse(localStorage.getItem('cart')) || [];
function addToCart(productIndex) {
  const product = products[productIndex];
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('تمت إضافة المنتج إلى السلة');
}

// عرض المنتجات عند تحميل الصفحة
window.onload = displayProducts;
