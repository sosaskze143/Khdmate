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

// عرض سلة التسوق
function displayCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';
  cart.forEach((item, index) => {
    cartItemsDiv.innerHTML += `
      <div class="product">
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>السعر: ${item.price} ريال</p>
        <button onclick="removeFromCart(${index})">إزالة</button>
      </div>
    `;
  });
}

// إزالة منتج من السلة
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

// إتمام الشراء
function checkout() {
  if (cart.length === 0) {
    alert('سلة التسوق فارغة!');
  } else {
    alert('تم إتمام الشراء بنجاح! سيتم التوصيل بالدفع عند الاستلام.');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
}

// عرض السلة عند تحميل الصفحة
if (window.location.pathname.includes('cart.html')) {
  window.onload = displayCart;
}

// عرض سلة التسوق
function displayCart() {
  const cartItemsDiv = document.getElementById('cart-items');
  cartItemsDiv.innerHTML = '';
  cart.forEach((item, index) => {
    cartItemsDiv.innerHTML += `
      <div class="product">
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <p>السعر: ${item.price} ريال</p>
        <button onclick="removeFromCart(${index})">إزالة</button>
      </div>
    `;
  });
}

// إزالة منتج من السلة
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

// إتمام الشراء
function checkout() {
  if (cart.length === 0) {
    alert('سلة التسوق فارغة!');
  } else {
    alert('تم إتمام الشراء بنجاح! سيتم التوصيل بالدفع عند الاستلام.');
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCart();
  }
}

// عرض السلة عند تحميل الصفحة
if (window.location.pathname.includes('cart.html')) {
  window.onload = displayCart;
}

// بيانات المستخدمين (سيتم تخزينها في LocalStorage)
let users = JSON.parse(localStorage.getItem('users')) || [];

// تسجيل حساب جديد
if (document.getElementById('register-form')) {
  document.getElementById('register-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // التحقق من عدم وجود حساب بنفس البريد الإلكتروني
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      alert('هذا البريد الإلكتروني مسجل مسبقًا!');
      return;
    }

    // إضافة المستخدم الجديد
    users.push({ name, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    alert('تم تسجيل الحساب بنجاح!');
    window.location.href = 'login.html';
  });
}

// تسجيل الدخول
if (document.getElementById('login-form')) {
  document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // البحث عن المستخدم
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      alert('تم تسجيل الدخول بنجاح!');
      window.location.href = 'index.html';
    } else {
      alert('البريد الإلكتروني أو كلمة المرور غير صحيحة!');
    }
  });
}
