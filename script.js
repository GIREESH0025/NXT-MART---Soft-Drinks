/* ============================================================
   NXT-MART — Main JavaScript
   Sections:
   1. Product Data
   2. ShoppingCart Class (OOP)
   3. UI Logic (render, filter, sort, search)
   4. Animation Logic (toast, ripple, skeleton)
   5. Age Verification
   6. Event Listeners
   ============================================================ */

'use strict';

// ============================================================
// 1. PRODUCT DATA
// ============================================================
const products = [
  {
    id: 1, name: "Old Monk", price: 149.99, category: "Rum", rating: 4.5,
    reviews: 128, inStock: true, createdAt: new Date('2025-12-01'),
    description: "Strong, dark, classic Indian Rum with a caramel depth.",
    image: "https://i.pinimg.com/736x/d5/69/25/d56925e9985ddfc4cc3b0b47a0ac6f24.jpg"
  },
  {
    id: 2, name: "Bacardi White", price: 19.99, category: "Rum", rating: 4.8,
    reviews: 450, inStock: true, createdAt: new Date('2025-11-15'),
    description: "Crisp, clean, party-perfect white rum.",
    image: "https://i.pinimg.com/1200x/01/4e/46/014e46446027db10fa7f869932fdc4a5.jpg"
  },
  {
    id: 3, name: "Absolut Vodka", price: 79.99, category: "Vodka", rating: 4.3,
    reviews: 95, inStock: true, createdAt: new Date('2025-10-20'),
    description: "Iconic bottle, timeless vodka flavour with refined finish.",
    image: "https://i.pinimg.com/1200x/d6/82/c6/d682c604b1742edf378cc69ce0a1f39a.jpg"
  },
  {
    id: 4, name: "Grey Goose", price: 24.99, category: "Vodka", rating: 5,
    reviews: 200, inStock: true, createdAt: new Date('2026-01-05'),
    description: "Ultra-premium, silky smooth French vodka with crisp finish.",
    image: "https://i.pinimg.com/736x/17/15/10/1715105a9b4cb2bebcbbdfed88cec992.jpg"
  },
  {
    id: 5, name: "Magic Moments", price: 14.99, category: "Vodka", rating: 4.7,
    reviews: 320, inStock: true, createdAt: new Date('2025-12-10'),
    description: "Smooth, affordable vodka available in many exciting flavours.",
    image: "https://i.pinimg.com/736x/49/37/bd/4937bd449d659038f41c05c6122b372d.jpg"
  },
  {
    id: 6, name: "Artic Vodka", price: 89.99, category: "Vodka", rating: 4.4,
    reviews: 156, inStock: false, createdAt: new Date('2025-11-01'),
    description: "Budget-friendly, strong and widely available Italian vodka.",
    image: "https://i.pinimg.com/736x/3e/e8/00/3ee800aba561b94289795dcdc47d7eb8.jpg"
  },
  {
    id: 7, name: "Captain Morgan", price: 129.99, category: "Rum", rating: 4.6,
    reviews: 187, inStock: true, createdAt: new Date('2025-12-15'),
    description: "Rich Caribbean-style spiced rum with warm vanilla notes.",
    image: "https://i.pinimg.com/736x/a7/ac/4f/a7ac4f30f8a92481fc8568c5e03d68f1.jpg"
  },
  {
    id: 8, name: "McDowell's No.1", price: 49.99, category: "Rum", rating: 4.2,
    reviews: 78, inStock: false, createdAt: new Date('2025-12-20'),
    description: "Classic affordable party rum with strong flavour and warm finish.",
    image: "https://i.pinimg.com/1200x/47/6c/81/476c81bd2029bf96b2c24f8f1641ca00.jpg"
  },
  {
    id: 9, name: "Johnnie Walker Gold", price: 44.99, category: "Whiskey", rating: 4.5,
    reviews: 412, inStock: true, createdAt: new Date('2026-01-02'),
    description: "Luxurious, smooth blended Scotch with honeyed creamy finish.",
    image: "https://i.pinimg.com/736x/63/03/2c/63032cbfcaae49804ba76a2665864ab4.jpg"
  },
  {
    id: 10, name: "Blenders Pride", price: 12.99, category: "Whiskey", rating: 4.9,
    reviews: 650, inStock: true, createdAt: new Date('2025-11-20'),
    description: "Elegant Indian whisky with mellow notes and a refined character.",
    image: "https://i.pinimg.com/1200x/d4/aa/f1/d4aaf12cfb095a75bd037cc1c9e41933.jpg"
  },
  {
    id: 11, name: "Johnnie Walker Black", price: 52.99, category: "Whiskey", rating: 4.9,
    reviews: 650, inStock: true, createdAt: new Date('2025-11-20'),
    description: "12-year aged blended Scotch with deep, smoky complexity.",
    image: "https://i.pinimg.com/736x/34/fc/02/34fc02330f5d3d8634a57c33fa5bd760.jpg"
  },
  {
    id: 12, name: "Glenfiddich 12YO", price: 89.99, category: "Whiskey", rating: 4.9,
    reviews: 580, inStock: true, createdAt: new Date('2025-11-20'),
    description: "Premium single malt Scotch — smooth, fruity notes with elegant oak.",
    image: "https://i.pinimg.com/736x/70/b4/d8/70b4d8fa2b12b82ec414d33636abf077.jpg"
  }
];

// ============================================================
// 2. SHOPPINGCART CLASS (OOP)
// ============================================================
class ShoppingCart {
  constructor() {
    this.items = [];
    this.loadFromStorage();
  }

  // Add item (or increment quantity)
  addItem(product, quantity = 1) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) {
      existing.quantity += quantity;
    } else {
      this.items.push({ ...product, quantity });
    }
    this.saveToStorage();
    this.updateUI();
  }

  // Remove item by id
  removeItem(productId) {
    this.items = this.items.filter(i => i.id !== productId);
    this.saveToStorage();
    this.updateUI();
  }

  // Update quantity (minimum 1)
  updateQuantity(productId, quantity) {
    const item = this.items.find(i => i.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.saveToStorage();
      this.updateUI();
    }
  }

  // Total price
  getTotal() {
    return this.items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  }

  // Total item count
  getItemCount() {
    return this.items.reduce((sum, i) => sum + i.quantity, 0);
  }

  // Clear all items
  clear() {
    this.items = [];
    this.saveToStorage();
    this.updateUI();
  }

  // Persist to localStorage
  saveToStorage() {
    localStorage.setItem('nxtmart_cart', JSON.stringify(this.items));
  }

  // Load from localStorage
  loadFromStorage() {
    try {
      const saved = localStorage.getItem('nxtmart_cart');
      this.items = saved ? JSON.parse(saved) : [];
    } catch {
      this.items = [];
    }
  }

  // Update badge count
  updateUI() {
    const count = this.getItemCount();
    const badge = document.getElementById('cartCount');
    badge.textContent = count;

    // Bump animation
    badge.classList.remove('bump');
    void badge.offsetWidth; // reflow trick
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 300);

    // Re-render cart if open
    if (document.getElementById('cartOverlay').classList.contains('open')) {
      renderCartItems();
    }
  }
}

// Instantiate cart
const cart = new ShoppingCart();

// ============================================================
// 3. UI LOGIC
// ============================================================

// State
let activeFilters = {
  search: '',
  maxPrice: 2000,
  categories: [],
  ratings: []
};

let currentSort = 'default';

/* ---------- Build category checkboxes dynamically ---------- */
function buildCategoryFilters() {
  const categories = [...new Set(products.map(p => p.category))].sort();
  const container = document.getElementById('categoryFilter');
  container.innerHTML = '';

  categories.forEach(cat => {
    const label = document.createElement('label');
    label.className = 'cat-label';
    label.innerHTML = `
      <input type="checkbox" class="catFilter" value="${cat}">
      <span>${cat}</span>
    `;
    container.appendChild(label);
  });

  // Attach listeners
  container.querySelectorAll('.catFilter').forEach(cb => {
    cb.addEventListener('change', () => {
      activeFilters.categories = [...container.querySelectorAll('.catFilter:checked')].map(c => c.value);
      renderProducts();
    });
  });
}

/* ---------- Get filtered + sorted products ---------- */
function getFilteredProducts() {
  let result = [...products];

  // Search
  if (activeFilters.search) {
    const q = activeFilters.search.toLowerCase();
    result = result.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }

  // Price
  result = result.filter(p => p.price <= activeFilters.maxPrice);

  // Category
  if (activeFilters.categories.length) {
    result = result.filter(p => activeFilters.categories.includes(p.category));
  }

  // Rating
  if (activeFilters.ratings.length) {
    const minRating = Math.min(...activeFilters.ratings.map(Number));
    result = result.filter(p => p.rating >= minRating);
  }

  // Sort
  switch (currentSort) {
    case 'price-low':  result.sort((a, b) => a.price - b.price); break;
    case 'price-high': result.sort((a, b) => b.price - a.price); break;
    case 'rating':     result.sort((a, b) => b.rating - a.rating); break;
    case 'newest':     result.sort((a, b) => b.createdAt - a.createdAt); break;
  }

  return result;
}

/* ---------- Star string helper ---------- */
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/* ---------- Render products to grid ---------- */
function renderProducts() {
  const grid   = document.getElementById('productsGrid');
  const noMsg  = document.getElementById('noProducts');
  const result = getFilteredProducts();

  // Update count
  document.getElementById('productCount').textContent = `${result.length} product${result.length !== 1 ? 's' : ''} found`;

  if (result.length === 0) {
    grid.innerHTML = '';
    noMsg.style.display = 'block';
    return;
  }

  noMsg.style.display = 'none';
  grid.innerHTML = result.map((p, i) => `
    <div class="product-card" style="animation-delay:${i * 0.07}s">
      <div class="product-img-wrapper">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <span class="stock-badge ${p.inStock ? 'in-stock' : 'out-stock'}">
          ${p.inStock ? '● In Stock' : '● Sold Out'}
        </span>
      </div>
      <div class="product-body">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-desc">${p.description}</div>
        <div class="product-footer">
          <div>
            <div class="stars">${renderStars(p.rating)}</div>
            <span class="reviews">(${p.reviews})</span>
          </div>
          <div class="product-price">₹${p.price.toFixed(2)}</div>
        </div>
        <button class="add-cart-btn" data-id="${p.id}" ${!p.inStock ? 'disabled' : ''}>
          ${p.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  `).join('');

  // Add ripple + cart logic
  grid.querySelectorAll('.add-cart-btn:not([disabled])').forEach(btn => {
    btn.addEventListener('click', (e) => {
      createRipple(e, btn);
      const product = products.find(p => p.id === Number(btn.dataset.id));
      cart.addItem(product);
      showToast(`🥃 ${product.name} added to cart`, 'success');
    });
  });
}

/* ---------- Render skeleton loading cards ---------- */
function renderSkeletons(count = 6) {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = Array(count).fill(0).map(() => `
    <div class="skeleton-card">
      <div class="skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton-line short"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
      </div>
    </div>
  `).join('');
}

/* ---------- Render cart items ---------- */
function renderCartItems() {
  const container = document.getElementById('cartItems');
  const totalEl   = document.getElementById('cartTotal');

  if (cart.items.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <p>Your cart is empty.<br>Add some spirits!</p>
      </div>`;
    totalEl.textContent = '$0.00';
    return;
  }

  container.innerHTML = cart.items.map(item => `
    <div class="cart-item" data-id="${item.id}">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
        <span class="qty-display">${item.quantity}</span>
        <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
        <button class="remove-btn" data-id="${item.id}">✕</button>
      </div>
    </div>
  `).join('');

  totalEl.textContent = `₹${cart.getTotal().toFixed(2)}`;

  // Qty / remove controls
  container.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id   = Number(btn.dataset.id);
      const item = cart.items.find(i => i.id === id);
      const dir  = btn.dataset.action === 'inc' ? 1 : -1;
      if (item.quantity + dir < 1) {
        cart.removeItem(id);
      } else {
        cart.updateQuantity(id, item.quantity + dir);
      }
      renderCartItems();
    });
  });

  container.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      cart.removeItem(Number(btn.dataset.id));
      renderCartItems();
    });
  });
}

// ============================================================
// 4. ANIMATION LOGIC
// ============================================================

/* ---------- Ripple effect ---------- */
function createRipple(e, btn) {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.cssText = `
    width:${size}px; height:${size}px;
    left:${e.clientX - rect.left - size / 2}px;
    top:${e.clientY - rect.top - size / 2}px;
  `;
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
}

/* ---------- Toast notification ---------- */
function showToast(message, type = 'default', duration = 2800) {
  const container = document.getElementById('toastContainer');
  const icons = { success: '✓', error: '✕', default: '🔔' };

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.default}</span> ${message}`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastOut 0.35s forwards';
    setTimeout(() => toast.remove(), 350);
  }, duration);
}

// ============================================================
// 5. AGE VERIFICATION
// ============================================================
function initAgeVerification() {
  const overlay = document.getElementById('ageOverlay');
  const errMsg  = document.getElementById('ageError');

  // Already verified in this session
  if (localStorage.getItem('nxtmart_age_ok') === 'true') {
    overlay.classList.add('hidden');
    return;
  }

  // Yes button
  document.getElementById('btnYes').addEventListener('click', () => {
    localStorage.setItem('nxtmart_age_ok', 'true');
    overlay.classList.add('hidden');
    showToast('Welcome to NXT-MART 🥃', 'success');
  });

  // No button
  document.getElementById('btnNo').addEventListener('click', () => {
    errMsg.textContent = '🚫 Sorry, you must be 18+ to enter this site.';
  });
}

// ============================================================
// 6. MODAL HELPERS
// ============================================================
function openModal(id)  { document.getElementById(id).classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('open'); document.body.style.overflow = ''; }

// ============================================================
// 7. FORM VALIDATION
// ============================================================
function validateCheckout(form) {
  let valid = true;

  const fields = {
    fullName:   { el: form.querySelector('#fullName'),   msg: 'Full name is required.' },
    email:      { el: form.querySelector('#email'),      msg: 'Valid email is required.' },
    address:    { el: form.querySelector('#address'),    msg: 'Address is required.' },
    city:       { el: form.querySelector('#city'),       msg: 'City is required.' },
    zipCode:    { el: form.querySelector('#zipCode'),    msg: 'Zip code is required.' },
    cardNumber: { el: form.querySelector('#cardNumber'), msg: 'Valid card number required (16 digits).' },
    expiry:     { el: form.querySelector('#expiry'),     msg: 'Expiry in MM/YY format.' },
    cvv:        { el: form.querySelector('#cvv'),        msg: 'CVV must be 3 digits.' }
  };

  // Clear old errors
  form.querySelectorAll('.form-error').forEach(e => e.textContent = '');
  form.querySelectorAll('input').forEach(i => i.classList.remove('error-field'));

  const setError = (fieldKey, msg) => {
    const el = fields[fieldKey].el;
    el.classList.add('error-field');
    el.nextElementSibling.textContent = msg;
    valid = false;
  };

  if (!fields.fullName.el.value.trim())           setError('fullName', fields.fullName.msg);
  if (!/\S+@\S+\.\S+/.test(fields.email.el.value)) setError('email', fields.email.msg);
  if (!fields.address.el.value.trim())             setError('address', fields.address.msg);
  if (!fields.city.el.value.trim())                setError('city', fields.city.msg);
  if (!fields.zipCode.el.value.trim())             setError('zipCode', fields.zipCode.msg);
  if (!/^\d{16}$/.test(fields.cardNumber.el.value.replace(/\s/g, ''))) setError('cardNumber', fields.cardNumber.msg);
  if (!/^\d{2}\/\d{2}$/.test(fields.expiry.el.value)) setError('expiry', fields.expiry.msg);
  if (!/^\d{3}$/.test(fields.cvv.el.value))       setError('cvv', fields.cvv.msg);

  return valid;
}

// ============================================================
// 8. INIT & EVENT LISTENERS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  /* ---- Age Verification ---- */
  initAgeVerification();

  /* ---- Build Filters ---- */
  buildCategoryFilters();

  /* ---- Skeleton then render ---- */
  renderSkeletons(6);
  setTimeout(() => renderProducts(), 700);

  /* ---- Navbar scroll effect ---- */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });

  /* ---- Search ---- */
  document.getElementById('searchInput').addEventListener('input', (e) => {
    activeFilters.search = e.target.value.trim();
    renderProducts();
  });

  /* ---- Price Range ---- */
  const priceRange = document.getElementById('priceRange');
  priceRange.addEventListener('input', (e) => {
    activeFilters.maxPrice = Number(e.target.value);
    document.getElementById('priceValue').textContent = `₹${e.target.value}`;
    renderProducts();
  });

  /* ---- Rating Filters ---- */
  document.querySelectorAll('.ratingFilter').forEach(cb => {
    cb.addEventListener('change', () => {
      activeFilters.ratings = [...document.querySelectorAll('.ratingFilter:checked')].map(c => c.value);
      renderProducts();
    });
  });

  /* ---- Sort ---- */
  document.getElementById('sortSelect').addEventListener('change', (e) => {
    currentSort = e.target.value;
    renderProducts();
  });

  /* ---- Reset Filters ---- */
  document.getElementById('resetFilters').addEventListener('click', () => {
    activeFilters = { search: '', maxPrice: 2000, categories: [], ratings: [] };
    document.getElementById('searchInput').value = '';
    document.getElementById('priceRange').value = 2000;
    document.getElementById('priceValue').textContent = '₹2000';
    document.querySelectorAll('.catFilter, .ratingFilter').forEach(cb => cb.checked = false);
    document.getElementById('sortSelect').value = 'default';
    currentSort = 'default';
    renderProducts();
  });

  /* ---- Cart open / close ---- */
  document.getElementById('cartBtn').addEventListener('click', () => {
    renderCartItems();
    openModal('cartOverlay');
  });

  document.getElementById('closeCart').addEventListener('click', () => closeModal('cartOverlay'));
  document.getElementById('cartOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal('cartOverlay');
  });

  /* ---- Checkout open ---- */
  document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.items.length === 0) {
      showToast('Your cart is empty!', 'error');
      return;
    }
    closeModal('cartOverlay');
    setTimeout(() => openModal('checkoutOverlay'), 200);
  });

  /* ---- Close checkout ---- */
  document.getElementById('closeCheckout').addEventListener('click', () => closeModal('checkoutOverlay'));
  document.getElementById('checkoutOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal('checkoutOverlay');
  });

  /* ---- Checkout form submit ---- */
  document.getElementById('checkoutForm').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateCheckout(e.target)) return;

    const orderNum = 'NXT-' + Math.random().toString(36).substring(2, 8).toUpperCase();
    cart.clear();
    closeModal('checkoutOverlay');

    setTimeout(() => {
      document.getElementById('orderNumber').textContent = `Order ID: ${orderNum}`;
      openModal('successOverlay');
    }, 200);
  });

  /* ---- Close success ---- */
  document.getElementById('closeSuccess').addEventListener('click', () => closeModal('successOverlay'));
  document.getElementById('successOverlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal('successOverlay');
  });

  /* ---- Card number auto-format ---- */
  document.getElementById('cardNumber').addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '').substring(0, 16);
    e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
  });

  /* ---- Expiry auto-format ---- */
  document.getElementById('expiry').addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '').substring(0, 4);
    if (v.length >= 2) v = v.slice(0, 2) + '/' + v.slice(2);
    e.target.value = v;
  });

  /* ---- CVV numeric only ---- */
  document.getElementById('cvv').addEventListener('input', (e) => {
    e.target.value = e.target.value.replace(/\D/g, '').substring(0, 3);
  });
});