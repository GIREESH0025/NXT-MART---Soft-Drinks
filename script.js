/* ============================================================
   NXT-MART Refreshments — Main JavaScript
   Sections:
   1. Product Data
   2. ShoppingCart Class (OOP)
   3. UI Logic (render, filter, sort, search)
   4. Animation Logic (toast, ripple, skeleton)
   5. Modal Helpers
   6. Form Validation
   7. Event Listeners
   ============================================================ */

'use strict';

// ============================================================
// 1. PRODUCT DATA — Indian Soft Drinks & Mocktails
// ============================================================
const IMG = (name) =>
  `https://raw.githubusercontent.com/GIREESH0025/NXT-MART---Soft-Drinks/main/images/${name}`;

const products = [
  // ── Cola / Carbonated ──────────────────────────────────────
  {
    id: 1,
    name: "Coca-Cola",
    price: 40,
    category: "Cola Drinks",
    rating: 4.8,
    reviews: 3120,
    inStock: true,
    badge: "popular",
    createdAt: new Date('2026-01-10'),
    description: "The world's most iconic cola — perfectly balanced sweetness with a signature refreshing fizz.",
    image: IMG("cococola.jpg")
  },
  {
    id: 2,
    name: "Pepsi",
    price: 40,
    category: "Cola Drinks",
    rating: 4.6,
    reviews: 2870,
    inStock: true,
    badge: null,
    createdAt: new Date('2026-01-08'),
    description: "Bold, crisp cola taste with a refreshing finish — the choice of a new generation.",
    image: IMG("pepsi.jpg")
  },
  {
    id: 3,
    name: "Thums Up",
    price: 40,
    category: "Cola Drinks",
    rating: 4.7,
    reviews: 2450,
    inStock: true,
    badge: "popular",
    createdAt: new Date('2025-12-20'),
    description: "India's favourite strong, sparkling cola with a distinctive bold taste and thunderous fizz.",
    image: IMG("thumsup.jpg")
  },
  // ── Lemon / Carbonated ─────────────────────────────────────
  {
    id: 4,
    name: "Sprite",
    price: 40,
    category: "Lemon Drinks",
    rating: 4.5,
    reviews: 1980,
    inStock: true,
    badge: "chilled",
    createdAt: new Date('2025-12-15'),
    description: "Crisp lemon-lime soda that quenches thirst with clean, refreshing bubbles — no caffeine.",
    image: IMG("sprite.jpg")
  },
  {
    id: 5,
    name: "Limca",
    price: 35,
    category: "Lemon Drinks",
    rating: 4.4,
    reviews: 1540,
    inStock: true,
    badge: "chilled",
    createdAt: new Date('2025-11-25'),
    description: "India's favourite nimbu soda — bubbly lemon-lime freshness with a zingy, thirst-quenching kick.",
    image: IMG("limca.png")
  },
  // ── Carbonated ─────────────────────────────────────────────
  {
    id: 6,
    name: "Fanta Orange",
    price: 40,
    category: "Carbonated Drinks",
    rating: 4.3,
    reviews: 1320,
    inStock: true,
    badge: null,
    createdAt: new Date('2025-11-10'),
    description: "Vibrant, fizzy orange soda bursting with fruity sweetness — fun in every sip.",
    image: IMG("fanta.jpg")
  },
  {
    id: 7,
    name: "Mountain Dew",
    price: 40,
    category: "Carbonated Drinks",
    rating: 4.2,
    reviews: 980,
    inStock: true,
    badge: null,
    createdAt: new Date('2025-10-30'),
    description: "Citrus-charged, electric green carbonated drink with an intense flavour kick for the bold.",
    image: IMG("mountaindew.jpg")
  },
  // ── Fruit Drinks ───────────────────────────────────────────
  {
    id: 8,
    name: "Maaza Mango",
    price: 45,
    category: "Fruit Drinks",
    rating: 4.9,
    reviews: 3600,
    inStock: true,
    badge: "popular",
    createdAt: new Date('2026-01-15'),
    description: "Thick, luscious Alphonso mango drink — the real taste of summer in every bottle.",
    image: IMG("maaza.jpg")
  },
  {
    id: 9,
    name: "Slice Mango",
    price: 45,
    category: "Fruit Drinks",
    rating: 4.7,
    reviews: 2900,
    inStock: true,
    badge: "popular",
    createdAt: new Date('2026-01-12'),
    description: "Smooth, creamy mango nectar that delivers the purest taste of ripe Indian mangoes.",
    image: IMG("slice.jpg")
  },
  {
    id: 10,
    name: "Tropicana Orange",
    price: 60,
    category: "Fruit Drinks",
    rating: 4.5,
    reviews: 1750,
    inStock: true,
    badge: null,
    createdAt: new Date('2025-12-05'),
    description: "100% pure squeezed orange juice — vitamin-packed, naturally sweet with a bright citrus taste.",
    image: IMG("Tropicana Orange.jpg")
  },
  {
    id: 11,
    name: "Real Fruit Juice",
    price: 55,
    category: "Fruit Drinks",
    rating: 4.4,
    reviews: 1380,
    inStock: true,
    badge: null,
    createdAt: new Date('2025-11-20'),
    description: "Mixed fruit juice with no added preservatives — wholesome, natural refreshment on the go.",
    image: IMG("realjuice.jpg")
  },
  // ── Energy Drinks ──────────────────────────────────────────
  {
    id: 12,
    name: "Red Bull",
    price: 125,
    category: "Energy Drinks",
    rating: 4.6,
    reviews: 2100,
    inStock: true,
    badge: "popular",
    createdAt: new Date('2026-01-05'),
    description: "The original energy drink — vitalizes body and mind with caffeine, taurine and B-vitamins.",
    image: IMG("redbull.jpg")
  },
  {
    id: 13,
    name: "Monster Energy",
    price: 130,
    category: "Energy Drinks",
    rating: 4.5,
    reviews: 1870,
    inStock: true,
    badge: null,
    createdAt: new Date('2025-12-28'),
    description: "Unleash the beast — mega-dose energy drink with a bold, slightly sweet flavour profile.",
    image: IMG("monster.jpg")
  },
  {
    id: 14,
    name: "Sting Energy",
    price: 50,
    category: "Energy Drinks",
    rating: 4.3,
    reviews: 2340,
    inStock: true,
    badge: "chilled",
    createdAt: new Date('2025-12-01'),
    description: "Affordable power-packed energy drink with grape or strawberry flavour — India's top pick.",
    image: IMG("string.jpg")
  },
  // ── Mocktails ──────────────────────────────────────────────
  {
    id: 15,
    name: "Virgin Mojito",
    price: 150,
    category: "Mocktails",
    rating: 4.8,
    reviews: 890,
    inStock: true,
    badge: "popular",
    createdAt: new Date('2026-01-18'),
    description: "Classic alcohol-free mojito — fresh mint, zesty lime, soda and sugar syrup perfectly blended.",
    image: IMG("Virgin Mojito.jpg")
  },
  {
    id: 16,
    name: "Blue Lagoon",
    price: 160,
    category: "Mocktails",
    rating: 4.7,
    reviews: 640,
    inStock: true,
    badge: null,
    createdAt: new Date('2026-01-20'),
    description: "Stunning tropical mocktail — blue curacao syrup, lemonade and sparkling water for a dazzling look.",
    image: IMG("Blue Lagoon.jpg")
  },
  {
    id: 17,
    name: "Strawberry Mojito",
    price: 155,
    category: "Mocktails",
    rating: 4.9,
    reviews: 720,
    inStock: true,
    badge: "popular",
    createdAt: new Date('2026-01-22'),
    description: "Fresh strawberries, mint, lime and soda come together in this beautiful, irresistible mocktail.",
    image: IMG("Strawberry Mojito.jpg")
  },
  {
    id: 18,
    name: "Mint Lemon Cooler",
    price: 140,
    category: "Mocktails",
    rating: 4.6,
    reviews: 540,
    inStock: false,
    badge: "chilled",
    createdAt: new Date('2025-12-10'),
    description: "Ultra-refreshing blend of fresh mint, lemon juice and chilled sparkling water — summer in a glass.",
    image: IMG("Mint Lemon Cooler.jpg")
  },
  {
    id: 19,
    name: "Pineapple Punch",
    price: 160,
    category: "Mocktails",
    rating: 4.5,
    reviews: 410,
    inStock: true,
    badge: null,
    createdAt: new Date('2025-12-18'),
    description: "Tropical pineapple juice, coconut water and a hint of ginger blended into a sunshine-yellow punch.",
    image: IMG("Pineapple Punch.jpg")
  },
  // ── Soda & Mixers ──────────────────────────────────────────
  {
    id: 20,
    name: "Schweppes Tonic",
    price: 80,
    category: "Soda & Mixers",
    rating: 4.4,
    reviews: 760,
    inStock: true,
    badge: null,
    createdAt: new Date('2025-11-15'),
    description: "Classic Indian tonic water with a subtle quinine bitterness — crisp, clean and perfectly effervescent.",
    image: IMG("Schweppes Tonic.jpg")
  },
  {
    id: 21,
    name: "Club Soda",
    price: 30,
    category: "Soda & Mixers",
    rating: 4.1,
    reviews: 520,
    inStock: true,
    badge: "chilled",
    createdAt: new Date('2025-10-20'),
    description: "Plain, highly carbonated soda water — the perfect base for mocktails, coolers and refreshing drinks.",
    image: IMG("Club Soda.jpg")
  },
  {
    id: 22,
    name: "Ginger Ale",
    price: 75,
    category: "Soda & Mixers",
    rating: 4.3,
    reviews: 630,
    inStock: false,
    badge: null,
    createdAt: new Date('2025-11-05'),
    description: "Light, sparkling ginger-flavoured soda — soothing, warming and brilliant in any mocktail mix.",
    image: IMG("Ginger Ale.jpg")
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
  maxPrice: 500,
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

/* ---------- Badge helper ---------- */
function renderBadge(badge) {
  if (!badge) return '';
  if (badge === 'popular') return `<span class="product-badge badge-popular">⭐ Popular</span>`;
  if (badge === 'chilled') return `<span class="product-badge badge-chilled">❄️ Chilled</span>`;
  return '';
}

/* ---------- Render products to grid ---------- */
function renderProducts() {
  const grid   = document.getElementById('productsGrid');
  const noMsg  = document.getElementById('noProducts');
  const result = getFilteredProducts();

  // Update count
  document.getElementById('productCount').textContent = `${result.length} drink${result.length !== 1 ? 's' : ''} found`;

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
        ${renderBadge(p.badge)}
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
      showToast(`🥤 ${product.name} added to cart`, 'success');
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
        <p>Your cart is empty.<br>Add some refreshing drinks!</p>
      </div>`;
    totalEl.textContent = '₹0.00';
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
// 5. MODAL HELPERS
// ============================================================
function openModal(id)  { document.getElementById(id).classList.add('open'); document.body.style.overflow = 'hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('open'); document.body.style.overflow = ''; }

// ============================================================
// 6. FORM VALIDATION
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
// 7. INIT & EVENT LISTENERS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {

  /* ---- Build Filters ---- */
  buildCategoryFilters();

  /* ---- Skeleton then render ---- */
  renderSkeletons(6);
  setTimeout(() => renderProducts(), 700);

  /* ---- Welcome toast ---- */
  setTimeout(() => showToast('Welcome to NXT-MART Refreshments 🥤', 'success'), 900);

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
    activeFilters = { search: '', maxPrice: 500, categories: [], ratings: [] };
    document.getElementById('searchInput').value = '';
    document.getElementById('priceRange').value = 500;
    document.getElementById('priceValue').textContent = '₹500';
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

  /* ---- VisionOS Micro-Interactions (merged from visionos.js) ---- */
  /* Small delay so renderProducts() has painted the grid */
  setTimeout(() => {
    initCardTilt();
    initCartPulse();
  }, 900);
});
/* ============================================================
   NXT-MART — VisionOS Micro-Interactions
   ────────────────────────────────────────────────────────────
   1. Subtle 3D perspective tilt on product card hover
   2. Dynamic specular light tracking (mouse-follows highlight)
   3. Cart-add pulse ring animation
   4. Smooth parallax depth on image inside card
   ============================================================ */

/* ============================================================
   CONFIG — Tune these to adjust feel
   ============================================================ */
const CFG = {
  tiltMax:        8,      // max degrees of 3D tilt
  tiltScale:      1.018,  // scale factor at hover peak
  glowRadius:     180,    // px radius of the specular glow
  glowOpacity:    0.12,   // max opacity of glow spot
  parallaxDepth:  14,     // px of image parallax travel
  easeMs:         600,    // transition ms (must match CSS --t-slow)
  resetMs:        700,    // ms to ease back to flat on leave
};

/* ============================================================
   CARD TILT + SPECULAR GLOW
   Uses requestAnimationFrame for 60fps smoothness
   ============================================================ */
function initCardTilt() {
  /* Only on non-touch devices */
  if (window.matchMedia('(hover: none)').matches) return;

  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  /* Re-attach whenever the grid is re-rendered */
  const observer = new MutationObserver(() => attachTiltToCards());
  observer.observe(grid, { childList: true });

  attachTiltToCards();
}

function attachTiltToCards() {
  const cards = document.querySelectorAll('.product-card');

  cards.forEach(card => {
    if (card._visionTiltBound) return; // avoid double-binding
    card._visionTiltBound = true;

    let raf = null;
    let isHovered = false;

    /* Create per-card specular glow overlay */
    const glow = document.createElement('div');
    glow.className = 'card-specular';
    glow.style.cssText = `
      position: absolute;
      inset: 0;
      border-radius: inherit;
      pointer-events: none;
      z-index: 3;
      opacity: 0;
      transition: opacity 0.28s ease;
      background: radial-gradient(
        ${CFG.glowRadius}px circle at 50% 50%,
        rgba(255,255,255,${CFG.glowOpacity}) 0%,
        transparent 70%
      );
      background-size: 200% 200%;
    `;
    card.appendChild(glow);

    function onMove(e) {
      if (!isHovered) return;
      if (raf) cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        const rect  = card.getBoundingClientRect();
        const cx    = rect.left + rect.width  / 2;
        const cy    = rect.top  + rect.height / 2;
        const dx    = e.clientX - cx;
        const dy    = e.clientY - cy;
        const nx    = dx / (rect.width  / 2); // -1 … +1
        const ny    = dy / (rect.height / 2); // -1 … +1

        /* 3D tilt */
        const rotateX = -ny * CFG.tiltMax;
        const rotateY =  nx * CFG.tiltMax;

        card.style.transform = `
          translateY(-9px)
          scale(${CFG.tiltScale})
          perspective(900px)
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
        `;
        card.style.transition = `transform 0.12s ease, box-shadow ${CFG.easeMs}ms var(--ease-apple, ease), border-color ${CFG.easeMs}ms`;

        /* Specular glow follows cursor */
        const px = ((e.clientX - rect.left) / rect.width)  * 100;
        const py = ((e.clientY - rect.top)  / rect.height) * 100;
        glow.style.background = `
          radial-gradient(
            ${CFG.glowRadius}px circle at ${px}% ${py}%,
            rgba(255,255,255,${CFG.glowOpacity}) 0%,
            transparent 70%
          )
        `;
        glow.style.opacity = '1';

        /* Parallax: image moves subtly opposite to tilt */
        const imgWrapper = card.querySelector('.product-img-wrapper img');
        if (imgWrapper) {
          const px2 = -nx * CFG.parallaxDepth / 2;
          const py2 = -ny * CFG.parallaxDepth / 2;
          imgWrapper.style.transform = `
            scale(1.10)
            translate(${px2}px, calc(-4px + ${py2}px))
          `;
          imgWrapper.style.transition = 'transform 0.14s ease, filter 0.55s ease';
        }
      });
    }

    function onEnter() {
      isHovered = true;
      glow.style.opacity = '1';
    }

    function onLeave() {
      isHovered = false;
      if (raf) cancelAnimationFrame(raf);

      card.style.transition = `
        transform ${CFG.resetMs}ms var(--ease-apple, ease),
        box-shadow ${CFG.easeMs}ms var(--ease-apple, ease),
        border-color ${CFG.easeMs}ms
      `;
      card.style.transform = '';

      glow.style.opacity = '0';

      const imgWrapper = card.querySelector('.product-img-wrapper img');
      if (imgWrapper) {
        imgWrapper.style.transform = '';
        imgWrapper.style.transition = 'transform 0.80s ease, filter 0.55s ease';
      }
    }

    card.addEventListener('mouseenter', onEnter);
    card.addEventListener('mousemove',  onMove);
    card.addEventListener('mouseleave', onLeave);
  });
}

/* ============================================================
   CART PULSE RING
   Fires on every "Add to Cart" click — wraps existing logic
   ============================================================ */
function initCartPulse() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  /* Delegate: listen for clicks on add-cart buttons */
  grid.addEventListener('click', (e) => {
    const btn = e.target.closest('.add-cart-btn:not([disabled])');
    if (!btn) return;

    const card = btn.closest('.product-card');
    if (!card) return;

    /* Remove any running pulse, then re-add on next frame */
    card.classList.remove('cart-pulse');
    void card.offsetWidth; // force reflow
    card.classList.add('cart-pulse');

    /* Clean up class after animation */
    const cleanup = () => card.classList.remove('cart-pulse');
    card.addEventListener('animationend', cleanup, { once: true });
  });
}
