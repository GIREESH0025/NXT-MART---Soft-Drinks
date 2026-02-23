/* ============================================================
   NXT-MART — World-Class Premium Edition v4.0 JavaScript
   Features:
   01. Product Data
   02. Shopping Cart
   03. Auth Manager (Login / Signup / Logout)
   04. Password Strength Meter
   05. Profile Panel
   06. Filter State & Logic
   07. Render Functions (Products, Cart, QuickView)
   08. Hero Particle Canvas
   09. Hero Product Scene Parallax
   10. Search Autocomplete + Recent Searches
   11. Offline Game (Soda Rush)
   12. Animations & Micro-Interactions
   13. Modals
   14. Form Validation (Checkout)
   15. Reviews Carousel
   16. Offer Countdown Timer
   17. Scroll Reveal + Counter
   18. Card Tilt (3D hover)
   19. Init
   ============================================================ */
'use strict';

/* ============================================================
   01. PRODUCT DATA
   ============================================================ */
const IMG = n => `https://raw.githubusercontent.com/GIREESH0025/NXT-MART---Soft-Drinks/main/images/${encodeURIComponent(n)}`;

const products = [
  { id:1,  name:"Coca-Cola",          price:40,  category:"Cola Drinks",      rating:4.8, reviews:3120, inStock:true,  badge:"popular", createdAt:new Date('2026-01-10'), description:"The world's most iconic cola — perfectly balanced sweetness with a signature refreshing fizz.",        image:IMG("cococola.jpg") },
  { id:2,  name:"Pepsi",              price:40,  category:"Cola Drinks",      rating:4.6, reviews:2870, inStock:true,  badge:null,      createdAt:new Date('2026-01-08'), description:"Bold, crisp cola taste with a refreshing finish — the choice of a new generation.",                   image:IMG("pepsi.jpg") },
  { id:3,  name:"Thums Up",           price:40,  category:"Cola Drinks",      rating:4.7, reviews:2450, inStock:true,  badge:"popular", createdAt:new Date('2025-12-20'), description:"India's favourite strong, sparkling cola with a distinctive bold taste and thunderous fizz.",          image:IMG("thumsup.jpg") },
  { id:4,  name:"Sprite",             price:40,  category:"Lemon Drinks",     rating:4.5, reviews:1980, inStock:true,  badge:"chilled", createdAt:new Date('2025-12-15'), description:"Crisp lemon-lime soda that quenches thirst with clean, refreshing bubbles — no caffeine.",            image:IMG("sprite.jpg") },
  { id:5,  name:"Limca",              price:35,  category:"Lemon Drinks",     rating:4.4, reviews:1540, inStock:true,  badge:"chilled", createdAt:new Date('2025-11-25'), description:"India's favourite nimbu soda — bubbly lemon-lime freshness with a zingy, thirst-quenching kick.",    image:IMG("limca.png") },
  { id:6,  name:"Fanta Orange",       price:40,  category:"Carbonated Drinks",rating:4.3, reviews:1320, inStock:true,  badge:null,      createdAt:new Date('2025-11-10'), description:"Vibrant, fizzy orange soda bursting with fruity sweetness — fun in every sip.",                      image:IMG("fanta.jpg") },
  { id:7,  name:"Mountain Dew",       price:40,  category:"Carbonated Drinks",rating:4.2, reviews:980,  inStock:true,  badge:null,      createdAt:new Date('2025-10-30'), description:"Citrus-charged, electric green carbonated drink with an intense flavour kick for the bold.",         image:IMG("mountaindew.jpg") },
  { id:8,  name:"Maaza Mango",        price:45,  category:"Fruit Drinks",     rating:4.9, reviews:3600, inStock:true,  badge:"popular", createdAt:new Date('2026-01-15'), description:"Thick, luscious Alphonso mango drink — the real taste of summer in every bottle.",                    image:IMG("maaza.jpg") },
  { id:9,  name:"Slice Mango",        price:45,  category:"Fruit Drinks",     rating:4.7, reviews:2900, inStock:true,  badge:"popular", createdAt:new Date('2026-01-12'), description:"Smooth, creamy mango nectar that delivers the purest taste of ripe Indian mangoes.",                  image:IMG("slice.jpg") },
  { id:10, name:"Tropicana Orange",   price:60,  category:"Fruit Drinks",     rating:4.5, reviews:1750, inStock:true,  badge:null,      createdAt:new Date('2025-12-05'), description:"100% pure squeezed orange juice — vitamin-packed, naturally sweet with a bright citrus taste.",      image:IMG("Tropicana Orange.jpg") },
  { id:11, name:"Real Fruit Juice",   price:55,  category:"Fruit Drinks",     rating:4.4, reviews:1380, inStock:true,  badge:null,      createdAt:new Date('2025-11-20'), description:"Mixed fruit juice with no added preservatives — wholesome, natural refreshment on the go.",          image:IMG("realjuice.jpg") },
  { id:12, name:"Red Bull",           price:125, category:"Energy Drinks",    rating:4.6, reviews:2100, inStock:true,  badge:"popular", createdAt:new Date('2026-01-05'), description:"The original energy drink — vitalizes body and mind with caffeine, taurine and B-vitamins.",          image:IMG("redbull.jpg") },
  { id:13, name:"Monster Energy",     price:130, category:"Energy Drinks",    rating:4.5, reviews:1870, inStock:true,  badge:null,      createdAt:new Date('2025-12-28'), description:"Unleash the beast — mega-dose energy drink with a bold, slightly sweet flavour profile.",            image:IMG("monster.jpg") },
  { id:14, name:"Sting Energy",       price:50,  category:"Energy Drinks",    rating:4.3, reviews:2340, inStock:true,  badge:"chilled", createdAt:new Date('2025-12-01'), description:"Affordable power-packed energy drink with grape or strawberry flavour — India's top pick.",          image:IMG("string.jpg") },
  { id:15, name:"Virgin Mojito",      price:150, category:"Mocktails",        rating:4.8, reviews:890,  inStock:true,  badge:"popular", createdAt:new Date('2026-01-18'), description:"Classic alcohol-free mojito — fresh mint, zesty lime, soda and sugar syrup perfectly blended.",     image:IMG("Virgin Mojito.jpg") },
  { id:16, name:"Blue Lagoon",        price:160, category:"Mocktails",        rating:4.7, reviews:640,  inStock:true,  badge:null,      createdAt:new Date('2026-01-20'), description:"Stunning tropical mocktail — blue curacao syrup, lemonade and sparkling water for a dazzling look.", image:IMG("Blue Lagoon.jpg") },
  { id:17, name:"Strawberry Mojito",  price:155, category:"Mocktails",        rating:4.9, reviews:720,  inStock:true,  badge:"popular", createdAt:new Date('2026-01-22'), description:"Fresh strawberries, mint, lime and soda come together in this beautiful, irresistible mocktail.",    image:IMG("Strawberry Mojito.jpg") },
  { id:18, name:"Mint Lemon Cooler",  price:140, category:"Mocktails",        rating:4.6, reviews:540,  inStock:false, badge:"chilled", createdAt:new Date('2025-12-10'), description:"Ultra-refreshing blend of fresh mint, lemon juice and chilled sparkling water — summer in a glass.", image:IMG("Mint Lemon Cooler.jpg") },
  { id:19, name:"Pineapple Punch",    price:160, category:"Mocktails",        rating:4.5, reviews:410,  inStock:true,  badge:null,      createdAt:new Date('2025-12-18'), description:"Tropical pineapple juice, coconut water and a hint of ginger blended into a sunshine-yellow punch.", image:IMG("Pineapple Punch.jpg") },
  { id:20, name:"Schweppes Tonic",    price:80,  category:"Soda & Mixers",    rating:4.4, reviews:760,  inStock:true,  badge:null,      createdAt:new Date('2025-11-15'), description:"Classic Indian tonic water with a subtle quinine bitterness — crisp, clean and perfectly effervescent.", image:IMG("Schweppes Tonic.jpg") },
  { id:21, name:"Club Soda",          price:30,  category:"Soda & Mixers",    rating:4.1, reviews:520,  inStock:true,  badge:"chilled", createdAt:new Date('2025-10-20'), description:"Plain, highly carbonated soda water — the perfect base for mocktails, coolers and refreshing drinks.", image:IMG("Club Soda.jpg") },
  { id:22, name:"Ginger Ale",         price:75,  category:"Soda & Mixers",    rating:4.3, reviews:630,  inStock:false, badge:null,      createdAt:new Date('2025-11-05'), description:"Light, sparkling ginger-flavoured soda — soothing, warming and brilliant in any mocktail mix.",     image:IMG("Ginger Ale.jpg") }
];

/* ============================================================
   02. SHOPPING CART
   ============================================================ */
class ShoppingCart {
  constructor() {
    this.items = [];
    this._load();
  }

  add(product, qty = 1) {
    const existing = this.items.find(i => i.id === product.id);
    if (existing) existing.quantity += qty;
    else this.items.push({ ...product, quantity: qty });
    this._save(); this._updateUI(); this._updateBadges();
  }

  remove(id) {
    this.items = this.items.filter(i => i.id !== id);
    this._save(); this._updateUI(); this._updateBadges();
  }

  setQty(id, qty) {
    const item = this.items.find(i => i.id === id);
    if (!item) return;
    if (qty < 1) { this.remove(id); return; }
    item.quantity = qty;
    this._save(); this._updateUI(); this._updateBadges();
  }

  clear() { this.items = []; this._save(); this._updateUI(); this._updateBadges(); }

  total()  { return this.items.reduce((s, i) => s + i.price * i.quantity, 0); }
  count()  { return this.items.reduce((s, i) => s + i.quantity, 0); }

  _save()  { try { localStorage.setItem('nxtmart_v4_cart', JSON.stringify(this.items)); } catch{} }
  _load()  { try { this.items = JSON.parse(localStorage.getItem('nxtmart_v4_cart') || '[]'); } catch { this.items = []; } }

  _updateUI() {
    const badge = document.getElementById('cartCount');
    if (!badge) return;
    const count = this.count();
    badge.textContent = count;
    if (count > 0) badge.removeAttribute('data-zero');
    else badge.setAttribute('data-zero', '');
    badge.classList.remove('bump');
    void badge.offsetWidth;
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 350);

    // Update profile panel cart count
    const pc = document.getElementById('profileCartCount');
    if (pc) pc.textContent = count;

    // Re-render cart if open
    if (document.getElementById('cartOverlay')?.classList.contains('open')) {
      renderCartItems();
    }
  }

  _updateBadges() {
    document.querySelectorAll('.product-card').forEach(card => {
      const btn = card.querySelector('.add-cart-btn');
      if (!btn) return;
      const id = Number(btn.dataset.id);
      const item = this.items.find(i => i.id === id);
      let badge = card.querySelector('.product-cart-badge');
      if (item?.quantity > 0) {
        if (!badge) {
          badge = document.createElement('span');
          badge.className = 'product-cart-badge';
          const wrapper = card.querySelector('.product-img-wrapper');
          if (wrapper) wrapper.appendChild(badge);
        }
        badge.textContent = item.quantity;
      } else if (badge) {
        badge.remove();
      }
    });
  }
}

const cart = new ShoppingCart();

/* ============================================================
   03. AUTH MANAGER
   ============================================================ */
class AuthManager {
  constructor() {
    this._key = 'nxtmart_v4_users';
    this._sessionKey = 'nxtmart_v4_session';
  }

  _getUsers() {
    try { return JSON.parse(localStorage.getItem(this._key) || '[]'); } catch { return []; }
  }

  _saveUsers(users) {
    try { localStorage.setItem(this._key, JSON.stringify(users)); } catch{}
  }

  _getSession() {
    try { return JSON.parse(sessionStorage.getItem(this._sessionKey) || 'null'); } catch { return null; }
  }

  _setSession(user) {
    try { sessionStorage.setItem(this._sessionKey, JSON.stringify(user)); } catch{}
  }

  _clearSession() {
    try { sessionStorage.removeItem(this._sessionKey); } catch{}
  }

  signup(name, email, password) {
    const users = this._getUsers();
    const existing = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existing) return { ok: false, error: 'An account with this email already exists.' };
    const user = { id: Date.now(), name: name.trim(), email: email.trim().toLowerCase(), password: this._hash(password), createdAt: new Date().toISOString() };
    users.push(user);
    this._saveUsers(users);
    const session = { id: user.id, name: user.name, email: user.email };
    this._setSession(session);
    return { ok: true, user: session };
  }

  signin(emailOrMobile, password) {
    const users = this._getUsers();
    const user = users.find(u => u.email.toLowerCase() === emailOrMobile.trim().toLowerCase());
    if (!user) return { ok: false, error: 'No account found with this email.' };
    if (user.password !== this._hash(password)) return { ok: false, error: 'Incorrect password. Please try again.' };
    const session = { id: user.id, name: user.name, email: user.email };
    this._setSession(session);
    return { ok: true, user: session };
  }

  signout() {
    this._clearSession();
  }

  currentUser() {
    return this._getSession();
  }

  isLoggedIn() {
    return !!this._getSession();
  }

  // Simple non-cryptographic hash for demo purposes
  _hash(str) {
    let h = 0;
    for (let i = 0; i < str.length; i++) {
      const chr = str.charCodeAt(i);
      h = ((h << 5) - h) + chr;
      h |= 0;
    }
    return 'h_' + Math.abs(h).toString(16) + '_' + str.length;
  }
}

const auth = new AuthManager();

/* Flag: true while the auth gate is active (user not yet logged in on this visit) */
let authGateActive = false;

/* ============================================================
   04. PASSWORD STRENGTH METER
   ============================================================ */
function checkPasswordStrength(password) {
  const checks = {
    length:    password.length >= 8,
    longLen:   password.length >= 12,
    lower:     /[a-z]/.test(password),
    upper:     /[A-Z]/.test(password),
    number:    /\d/.test(password),
    special:   /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  };

  const score = Object.values(checks).filter(Boolean).length;
  const failed = [];
  if (!checks.length)   failed.push('8+ chars');
  if (!checks.lower)    failed.push('lowercase');
  if (!checks.upper)    failed.push('uppercase');
  if (!checks.number)   failed.push('number');
  if (!checks.special)  failed.push('special char');

  let level, bars, label;
  if (!password) { level = 'none'; bars = 0; label = 'Enter a password'; }
  else if (score <= 2)  { level = 'weak';   bars = 1; label = 'Weak — too simple'; }
  else if (score <= 4)  { level = 'medium'; bars = 2; label = 'Medium — almost there'; }
  else if (score <= 5)  { level = 'medium'; bars = 3; label = 'Good — one step more'; }
  else                  { level = 'strong'; bars = 4; label = 'Strong — excellent!'; }

  return { level, bars, label, failed, score };
}

function renderPasswordStrength(password) {
  const { level, bars, label, failed } = checkPasswordStrength(password);
  const barEls = document.querySelectorAll('.pw-bar');
  const labelEl = document.getElementById('pwStrengthLabel');
  const hintsEl = document.getElementById('pwStrengthHints');

  barEls.forEach((bar, i) => {
    bar.classList.remove('lit', 'weak', 'medium', 'strong');
    if (i < bars && level !== 'none') {
      bar.classList.add('lit', level);
    }
  });

  if (labelEl) {
    labelEl.textContent = label;
    labelEl.classList.remove('weak', 'medium', 'strong');
    if (level !== 'none') labelEl.classList.add(level);
  }

  if (hintsEl) {
    hintsEl.textContent = failed.length && password ? `Need: ${failed.join(', ')}` : '';
  }

  return { level, bars };
}

/* ============================================================
   05. PROFILE PANEL
   ============================================================ */
function syncAuthUI() {
  const user = auth.currentUser();
  const authBtn  = document.getElementById('navAuthBtn');
  const anchor   = document.getElementById('profileAnchor');
  const initials = document.getElementById('navAvatarInitials');
  const avatarLg = document.getElementById('profileAvatarLg');
  const nameEl   = document.getElementById('profileName');
  const contactEl= document.getElementById('profileContact');

  if (user) {
    if (authBtn)  authBtn.style.display = 'none';
    if (anchor)   anchor.style.display  = 'block';
    const parts = user.name.trim().split(' ');
    const init  = (parts[0][0] + (parts[1]?.[0] || '')).toUpperCase();
    if (initials)  initials.textContent  = init;
    if (avatarLg)  avatarLg.textContent  = init;
    if (nameEl)    nameEl.textContent    = user.name;
    if (contactEl) contactEl.textContent = user.email;
  } else {
    if (authBtn) authBtn.style.display = 'flex';
    if (anchor)  anchor.style.display  = 'none';
  }
  // Update cart count in profile
  const pc = document.getElementById('profileCartCount');
  if (pc) pc.textContent = cart.count();
}

function initProfilePanel() {
  const btn       = document.getElementById('profileBtn');
  const panel     = document.getElementById('profilePanel');
  const logoutBtn = document.getElementById('profileLogoutBtn');

  if (!btn || !panel) return;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const isOpen = panel.classList.contains('open');
    panel.classList.toggle('open', !isOpen);
    btn.setAttribute('aria-expanded', String(!isOpen));
  });

  document.addEventListener('click', e => {
    if (!panel.contains(e.target) && e.target !== btn) {
      panel.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      auth.signout();
      panel.classList.remove('open');
      syncAuthUI();
      showToast('You have been signed out', 'default');
    });
  }
}

/* ============================================================
   06. FILTER STATE & LOGIC
   ============================================================ */
let activeFilters = { search: '', maxPrice: 500, categories: [], ratings: [] };
let currentSort = 'default';

function buildCategoryFilters() {
  const cats = [...new Set(products.map(p => p.category))].sort();
  const container = document.getElementById('categoryFilter');
  if (!container) return;
  container.innerHTML = '';
  cats.forEach(cat => {
    const label = document.createElement('label');
    label.className = 'cat-label';
    label.innerHTML = `<input type="checkbox" class="catFilter" value="${cat}"> <span>${cat}</span>`;
    container.appendChild(label);
  });
  container.querySelectorAll('.catFilter').forEach(cb => {
    cb.addEventListener('change', () => {
      activeFilters.categories = [...container.querySelectorAll('.catFilter:checked')].map(c => c.value);
      renderProducts();
    });
  });
}

function getFilteredProducts() {
  let r = [...products];
  if (activeFilters.search) {
    const q = activeFilters.search.toLowerCase();
    r = r.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  }
  r = r.filter(p => p.price <= activeFilters.maxPrice);
  if (activeFilters.categories.length) r = r.filter(p => activeFilters.categories.includes(p.category));
  if (activeFilters.ratings.length) {
    const min = Math.min(...activeFilters.ratings.map(Number));
    r = r.filter(p => p.rating >= min);
  }
  switch (currentSort) {
    case 'price-low':  r.sort((a, b) => a.price - b.price); break;
    case 'price-high': r.sort((a, b) => b.price - a.price); break;
    case 'rating':     r.sort((a, b) => b.rating - a.rating); break;
    case 'newest':     r.sort((a, b) => b.createdAt - a.createdAt); break;
  }
  return r;
}

/* ============================================================
   07. RENDER FUNCTIONS
   ============================================================ */
function renderStars(r) {
  const full = Math.floor(r), half = r % 1 >= 0.5 ? 1 : 0;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
}

function renderBadge(badge) {
  if (!badge) return '';
  if (badge === 'popular') return `<span class="product-badge badge-popular">⭐ Popular</span>`;
  if (badge === 'chilled') return `<span class="product-badge badge-chilled">❄️ Chilled</span>`;
  return '';
}

function renderProducts() {
  const grid   = document.getElementById('productsGrid');
  const noMsg  = document.getElementById('noProducts');
  if (!grid) return;                          // null-safe guard
  const result = getFilteredProducts();
  const countEl= document.getElementById('productCount');

  if (countEl) countEl.textContent = `${result.length} drink${result.length !== 1 ? 's' : ''} found`;

  if (!result.length) {
    grid.innerHTML = '';
    if (noMsg) noMsg.style.display = 'block';
    return;
  }
  if (noMsg) noMsg.style.display = 'none';

  grid.innerHTML = result.map((p, i) => {
    const cartItem = cart.items.find(ci => ci.id === p.id);
    const cartQty  = cartItem ? cartItem.quantity : 0;
    return `
      <div class="product-card" role="listitem">
        <div class="product-img-wrapper">
          <img src="${p.image}" alt="${p.name}" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'200\\' height=\\'200\\'%3E%3Crect fill=\\'%23121228\\' width=\\'200\\' height=\\'200\\'/%3E%3Ctext fill=\\'%23d4a840\\' font-size=\\'40\\' text-anchor=\\'middle\\' x=\\'100\\' y=\\'115\\'%3E🥤%3C/text%3E%3C/svg%3E'">
          <span class="stock-badge ${p.inStock ? 'in-stock' : 'out-stock'}">● ${p.inStock ? 'In Stock' : 'Sold Out'}</span>
          ${renderBadge(p.badge)}
          ${cartQty > 0 ? `<span class="product-cart-badge">${cartQty}</span>` : ''}
          <button class="product-quick-view" data-id="${p.id}" aria-label="Quick view ${p.name}">👁 Quick View</button>
        </div>
        <div class="product-body">
          <div class="product-category">${p.category}</div>
          <div class="product-name">${p.name}</div>
          <div class="product-desc">${p.description}</div>
          <div class="product-footer">
            <div>
              <div class="stars" aria-label="${p.rating} stars">${renderStars(p.rating)}</div>
              <span class="reviews">(${p.reviews.toLocaleString('en-IN')})</span>
            </div>
            <div class="product-price">₹${p.price.toFixed(0)}</div>
          </div>
          <button class="add-cart-btn" data-id="${p.id}" ${!p.inStock ? 'disabled' : ''}>
            ${p.inStock ? '+ Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>`;
  }).join('');

  // Stagger card-in animation via JS (cards are visible by default via CSS)
  const cards = grid.querySelectorAll('.product-card');
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(18px)';
    setTimeout(() => {
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      card.style.opacity = '1';
      card.style.transform = 'none';
      setTimeout(() => {
        card.style.transition = '';
        card.style.transform  = '';
      }, 450);
    }, i * 40);
  });

  // Add to cart
  grid.querySelectorAll('.add-cart-btn:not([disabled])').forEach(btn => {
    btn.addEventListener('click', e => {
      createRipple(e, btn);
      const product = products.find(p => p.id === Number(btn.dataset.id));
      if (!product) return;
      cart.add(product);
      const card = btn.closest('.product-card');
      if (card) {
        card.classList.remove('cart-pulse');
        void card.offsetWidth;
        card.classList.add('cart-pulse');
      }
      showToast(`🥤 ${product.name} added to cart`, 'success');
    });
  });

  // Quick view
  grid.querySelectorAll('.product-quick-view').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const product = products.find(p => p.id === Number(btn.dataset.id));
      if (product) openQuickView(product);
    });
  });

  setTimeout(() => safe(() => attachTiltToCards(), 'tiltCards'), 80);
}

function renderSkeletons(n = 6) {
  document.getElementById('productsGrid').innerHTML = Array(n).fill(0).map(() => `
    <div class="skeleton-card">
      <div class="skeleton-img"></div>
      <div class="skeleton-body">
        <div class="skeleton-line short"></div>
        <div class="skeleton-line"></div>
        <div class="skeleton-line short"></div>
      </div>
    </div>`).join('');
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const totalEl   = document.getElementById('cartTotal');
  if (!container) return;

  if (!cart.items.length) {
    container.innerHTML = `
      <div class="empty-cart">
        <div class="empty-cart-icon">🛒</div>
        <p>Your cart is empty.<br>Add some refreshing drinks!</p>
      </div>`;
    if (totalEl) totalEl.textContent = '₹0.00';
    return;
  }

  container.innerHTML = cart.items.map(item => `
    <div class="cart-item">
      <img class="cart-item-img" src="${item.image}" alt="${item.name}" loading="lazy">
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
      </div>
      <div class="cart-item-controls">
        <button class="qty-btn" data-action="dec" data-id="${item.id}" aria-label="Decrease quantity">−</button>
        <span class="qty-display" aria-live="polite">${item.quantity}</span>
        <button class="qty-btn" data-action="inc" data-id="${item.id}" aria-label="Increase quantity">+</button>
        <button class="remove-btn" data-id="${item.id}" aria-label="Remove ${item.name}">✕</button>
      </div>
    </div>`).join('');

  if (totalEl) totalEl.textContent = `₹${cart.total().toFixed(2)}`;

  container.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id   = Number(btn.dataset.id);
      const item = cart.items.find(i => i.id === id);
      if (!item) return;
      const dir = btn.dataset.action === 'inc' ? 1 : -1;
      cart.setQty(id, item.quantity + dir);
      renderCartItems();
    });
  });

  container.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      cart.remove(Number(btn.dataset.id));
      renderCartItems();
    });
  });
}

/* Quick View */
function openQuickView(product) {
  if (!product) return;
  const content = document.getElementById('quickViewContent');
  if (!content) return;
  content.innerHTML = `
    <div class="qv-image-side">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="qv-info">
      <div class="qv-cat">${product.category}</div>
      <div class="qv-name">${product.name}</div>
      <div class="qv-desc">${product.description}</div>
      <div class="qv-meta">
        <div>
          <div class="stars">${renderStars(product.rating)}</div>
          <span class="reviews">(${product.reviews.toLocaleString('en-IN')} reviews)</span>
        </div>
        <div class="qv-price">₹${product.price}</div>
      </div>
      <button class="qv-add-btn" data-id="${product.id}" ${!product.inStock ? 'disabled' : ''}>
        ${product.inStock ? '🛒 Add to Cart' : 'Out of Stock'}
      </button>
    </div>`;

  content.querySelector('.qv-add-btn:not([disabled])')?.addEventListener('click', e => {
    createRipple(e, e.target);
    cart.add(product);
    closeModal('quickViewOverlay');
    showToast(`🥤 ${product.name} added to cart`, 'success');
  });

  openModal('quickViewOverlay');
}
/* ============================================================
   08. HERO PARTICLE CANVAS
   ============================================================ */
function initHeroParticles() {
  const canvas = document.getElementById('heroParticles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  const particles = [];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', debounce(resize, 200));

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: Math.random() * 1200,
      y: Math.random() * 800,
      r: Math.random() * 1.5 + 0.3,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.4 + 0.08,
      color: Math.random() > 0.65 ? [212, 168, 64] : [255, 255, 255],
    });
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x = (p.x + p.vx + W) % W;
      p.y = (p.y + p.vy + H) % H;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${p.color.join(',')},${p.opacity})`;
      ctx.fill();
    });
    // Faint connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const d = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y);
        if (d < 90) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(212,168,64,${0.03 * (1 - d / 90)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ============================================================
   09. HERO PRODUCT SCENE — Mouse Parallax
   ============================================================ */
function initHeroParallax() {
  const scene = document.getElementById('heroProductScene');
  if (!scene) return;
  const card = scene.querySelector('.hps-card');
  if (!card) return;

  let tX = 0, tY = 0, cX = 0, cY = 0;

  document.addEventListener('mousemove', e => {
    const { innerWidth: W, innerHeight: H } = window;
    tX = ((e.clientX / W) - 0.5) * 20;
    tY = ((e.clientY / H) - 0.5) * -14;
  });

  function animateParallax() {
    cX += (tX - cX) * 0.06;
    cY += (tY - cY) * 0.06;
    if (card) card.style.transform = `translate(-50%, -50%) translateY(${Math.sin(Date.now() * 0.001) * 12}px) rotate(${cX * 0.06}deg) rotateX(${cY * 0.08}deg)`;
    requestAnimationFrame(animateParallax);
  }
  animateParallax();
}

/* ============================================================
   10. SEARCH AUTOCOMPLETE + RECENT SEARCHES
   ============================================================ */
const RECENTS_KEY = 'nxtmart_v4_recents';

function getRecentSearches() {
  try { return JSON.parse(localStorage.getItem(RECENTS_KEY) || '[]'); } catch { return []; }
}

function addRecentSearch(q) {
  if (!q || q.length < 2) return;
  let recents = getRecentSearches().filter(r => r.toLowerCase() !== q.toLowerCase());
  recents.unshift(q);
  recents = recents.slice(0, 6);
  try { localStorage.setItem(RECENTS_KEY, JSON.stringify(recents)); } catch{}
}

function renderRecentSearches() {
  const section = document.getElementById('searchRecentsSection');
  const list    = document.getElementById('searchRecentsList');
  if (!section || !list) return;
  const recents = getRecentSearches();
  if (!recents.length) { section.style.display = 'none'; return; }
  section.style.display = 'block';
  list.innerHTML = recents.map(r => `
    <div class="search-recent-item" data-q="${r}">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity:0.4"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
      ${r}
    </div>`).join('');
  list.querySelectorAll('.search-recent-item').forEach(item => {
    item.addEventListener('click', () => runSearch(item.dataset.q));
  });
}

function runSearch(q) {
  const input = document.getElementById('searchInput');
  if (input) input.value = q;
  activeFilters.search = q;
  renderProducts();
  document.getElementById('searchResultsList').style.display = 'none';
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
  addRecentSearch(q);
}

function highlightMatch(text, query) {
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return `${text.slice(0, idx)}<mark style="background:rgba(212,168,64,0.2);color:#f0c850;border-radius:2px;padding:0 1px">${text.slice(idx, idx + query.length)}</mark>${text.slice(idx + query.length)}`;
}

const _debouncedSearchRender = debounce((q) => {
  const resultsList = document.getElementById('searchResultsList');
  if (!resultsList) return;
  if (!q) { resultsList.style.display = 'none'; return; }
  const matches = products
    .filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.category.toLowerCase().includes(q.toLowerCase()))
    .slice(0, 6);
  if (!matches.length) { resultsList.style.display = 'none'; return; }
  resultsList.style.display = 'block';
  resultsList.innerHTML = matches.map(p => `
    <div class="search-result-item" data-id="${p.id}" role="option">
      <img class="search-result-img" src="${p.image}" alt="${p.name}" loading="lazy">
      <div class="search-result-info">
        <div class="search-result-name">${highlightMatch(p.name, q)}</div>
        <div class="search-result-cat">${p.category}</div>
      </div>
      <span class="search-result-price">₹${p.price}</span>
    </div>`).join('');
  resultsList.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => {
      const product = products.find(p => p.id === Number(item.dataset.id));
      if (product) runSearch(product.name);
    });
  });
}, 180);

function initSearchAutocomplete() {
  const input       = document.getElementById('searchInput');
  const resultsList = document.getElementById('searchResultsList');
  if (!input) return;

  input.addEventListener('input', e => {
    const q = e.target.value.trim();
    activeFilters.search = q;
    renderProducts();
    _debouncedSearchRender(q);
    if (!q) renderRecentSearches();
  });

  input.addEventListener('focus', () => {
    if (!input.value) renderRecentSearches();
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter' && input.value.trim()) {
      runSearch(input.value.trim());
      document.getElementById('navSearchBar').classList.remove('open');
    }
  });

  document.querySelectorAll('.search-chip').forEach(chip => {
    chip.addEventListener('click', () => runSearch(chip.dataset.q));
  });

  document.querySelectorAll('.search-trend-item').forEach(item => {
    item.addEventListener('click', () => runSearch(item.dataset.q));
  });
}

/* ============================================================
   11. OFFLINE GAME
   ============================================================ */
function initOfflineGame() {
  const canvas    = document.getElementById('gameCanvas');
  if (!canvas) return;
  const ctx       = canvas.getContext('2d');
  const scoreEl   = document.getElementById('gameScore');
  const bestEl    = document.getElementById('gameBest');
  const restartEl = document.getElementById('gameRestartBtn');
  const W = canvas.width, H = canvas.height;
  const GROUND_Y = H - 35;
  let best = parseInt(localStorage.getItem('nxtmart_game_best') || '0');
  if (bestEl) bestEl.textContent = best;
  let player, obstacles, score, frame, speed, gameRunning, gameOver, raf;

  function initGame() {
    player = { x: 80, y: GROUND_Y - 40, w: 30, h: 40, vy: 0, grounded: true };
    obstacles = []; score = 0; frame = 0; speed = 4; gameRunning = true; gameOver = false;
    if (raf) cancelAnimationFrame(raf);
    loop();
  }

  function jump() { if (player.grounded) { player.vy = -14; player.grounded = false; } }

  function loop() {
    raf = requestAnimationFrame(loop);
    frame++; score = Math.floor(frame / 6); speed = 4 + score / 200;
    if (score > best) { best = score; localStorage.setItem('nxtmart_game_best', best); if (bestEl) bestEl.textContent = best; }
    if (scoreEl) scoreEl.textContent = score;
    if (frame % Math.max(50, 110 - score / 3) === 0) { const h = 28 + Math.random() * 20; obstacles.push({ x: W, y: GROUND_Y - h, w: 18, h }); }
    player.vy += 0.7; player.y += player.vy;
    if (player.y >= GROUND_Y - player.h) { player.y = GROUND_Y - player.h; player.vy = 0; player.grounded = true; }
    obstacles = obstacles.filter(o => o.x > -50);
    obstacles.forEach(o => o.x -= speed);
    for (const o of obstacles) {
      if (player.x+4 < o.x+o.w-4 && player.x+player.w-4 > o.x+4 && player.y+4 < o.y+o.h && player.y+player.h > o.y+4) {
        gameRunning = false; gameOver = true; cancelAnimationFrame(raf); drawGameOver(); return;
      }
    }
    drawFrame();
  }

  function drawFrame() {
    ctx.clearRect(0, 0, W, H);
    const grad = ctx.createLinearGradient(0,0,0,H);
    grad.addColorStop(0, '#060610'); grad.addColorStop(1, '#0a0a1a');
    ctx.fillStyle = grad; ctx.fillRect(0,0,W,H);
    ctx.fillStyle='rgba(255,255,255,0.35)';
    for(let i=0;i<30;i++){ctx.beginPath();ctx.arc(((i*137+frame*0.2)%W),(i*53)%(GROUND_Y-20),0.8,0,Math.PI*2);ctx.fill();}
    const gGrad=ctx.createLinearGradient(0,0,W,0);
    gGrad.addColorStop(0,'transparent');gGrad.addColorStop(0.3,'rgba(212,168,64,0.5)');gGrad.addColorStop(0.7,'rgba(212,168,64,0.5)');gGrad.addColorStop(1,'transparent');
    ctx.strokeStyle=gGrad;ctx.lineWidth=1.5;ctx.beginPath();ctx.moveTo(0,GROUND_Y);ctx.lineTo(W,GROUND_Y);ctx.stroke();
    ctx.save();ctx.font=`${player.h}px serif`;ctx.textAlign='center';ctx.textBaseline='bottom';
    const sq=player.grounded?1:1+Math.abs(player.vy)*0.02;
    ctx.translate(player.x+player.w/2,player.y+player.h);ctx.scale(1/sq,sq);ctx.fillText('🥤',0,0);ctx.restore();
    obstacles.forEach(o=>{ctx.save();ctx.font=`${o.h}px serif`;ctx.textAlign='center';ctx.textBaseline='bottom';ctx.fillText('🍾',o.x+o.w/2,o.y+o.h);ctx.restore();});
    ctx.fillStyle='rgba(212,168,64,0.7)';ctx.font='600 13px Figtree,sans-serif';ctx.textAlign='right';ctx.fillText(`Score: ${score}`,W-14,26);
  }

  function drawGameOver() {
    drawFrame();
    ctx.fillStyle='rgba(2,2,8,0.72)';ctx.fillRect(0,0,W,H);
    ctx.textAlign='center';ctx.fillStyle='rgba(212,168,64,0.95)';ctx.font='bold 26px Fraunces,serif';ctx.fillText('Game Over!',W/2,H/2-20);
    ctx.font='14px Figtree,sans-serif';ctx.fillStyle='rgba(255,255,255,0.6)';ctx.fillText(`Score: ${score} · Best: ${best}`,W/2,H/2+14);ctx.fillText('Press Space or tap to restart',W/2,H/2+38);
  }

  function handleInput() { if (gameOver) initGame(); else jump(); }
  document.addEventListener('keydown', e => { if(document.getElementById('offlineOverlay').style.display!=='none'&&(e.code==='Space'||e.code==='ArrowUp')){e.preventDefault();handleInput();} });
  canvas.addEventListener('click', handleInput);
  if (restartEl) restartEl.addEventListener('click', initGame);
  initGame();
}

function checkOnline() {
  const overlay = document.getElementById('offlineOverlay');
  if (!overlay) return;
  window.addEventListener('online',  () => { overlay.style.display = 'none'; });
  window.addEventListener('offline', () => { overlay.style.display = 'flex'; initOfflineGame(); });
  if (!navigator.onLine) { overlay.style.display = 'flex'; initOfflineGame(); }
}

/* ============================================================
   12. ANIMATIONS & MICRO-INTERACTIONS
   ============================================================ */

/* Ripple effect */
function createRipple(e, btn) {
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px;`;
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 650);
}

/* Toast */
function showToast(message, type = 'default', duration = 2800) {
  const container = document.getElementById('toastContainer');
  const icons = { success: '✓', error: '✕', default: '🔔' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type] || icons.default}</span> ${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.35s forwards';
    setTimeout(() => toast.remove(), 360);
  }, duration);
}

/* Scroll reveal + counters */
function initScrollReveal() {
  function animateCounter(el) {
    const target = parseInt(el.dataset.target || 0);
    if (!target) return;
    let current = 0;
    const step = target / 40;
    const iv = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = Math.floor(current);
      if (current >= target) clearInterval(iv);
    }, 35);
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        e.target.querySelectorAll?.('.counter-up').forEach(animateCounter);
        obs.unobserve(e.target); // stop watching once visible
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });

  document.querySelectorAll('.reveal-up, .reveal-right').forEach(el => obs.observe(el));

  document.querySelectorAll('.counter-up').forEach(el => {
    const hObs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) { animateCounter(el); hObs.disconnect(); }
    }, { threshold: 0.3 });
    hObs.observe(el);
  });

  // FAIL-SAFE: after 800ms, force-show any elements still hidden
  // (catches cases where IntersectionObserver threshold wasn't met)
  setTimeout(() => {
    document.querySelectorAll('.reveal-up:not(.visible), .reveal-right:not(.visible)').forEach(el => {
      el.classList.add('visible');
    });
  }, 800);
}

/* Card 3D Tilt */
const TILT = { max: 7, glowOpacity: 0.12, parallax: 14, ease: 550, resetEase: 680 };

function attachTiltToCards() {
  if (window.matchMedia('(hover:none)').matches) return;
  document.querySelectorAll('.product-card').forEach(card => {
    if (card._tilt) return;
    card._tilt = true;
    const glow = document.createElement('div');
    glow.style.cssText = 'position:absolute;inset:0;border-radius:inherit;pointer-events:none;z-index:3;opacity:0;transition:opacity 0.25s;';
    card.appendChild(glow);
    let raf = null, hovered = false;

    card.addEventListener('mouseenter', () => { hovered = true; glow.style.opacity = '1'; card.style.willChange = 'transform'; });
    card.addEventListener('mousemove', e => {
      if (!hovered) return;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const nx = (e.clientX - rect.left - rect.width/2) / (rect.width/2);
        const ny = (e.clientY - rect.top  - rect.height/2) / (rect.height/2);
        const rx = -ny * TILT.max, ry = nx * TILT.max;
        card.style.transform  = `translateY(-10px) scale(1.016) perspective(700px) rotateX(${rx}deg) rotateY(${ry}deg)`;
        card.style.transition = 'transform 0.10s ease';
        const px = ((e.clientX - rect.left) / rect.width)  * 100;
        const py = ((e.clientY - rect.top)  / rect.height) * 100;
        glow.style.background = `radial-gradient(180px circle at ${px}% ${py}%, rgba(255,255,255,${TILT.glowOpacity}) 0%, transparent 70%)`;
        const img = card.querySelector('.product-img-wrapper img');
        if (img) { img.style.transform = `scale(1.10) translate(${-nx*TILT.parallax/2}px, ${-ny*TILT.parallax/2}px)`; img.style.transition = 'transform 0.12s ease'; }
      });
    });
    card.addEventListener('mouseleave', () => {
      hovered = false;
      if (raf) cancelAnimationFrame(raf);
      card.style.transition = `transform ${TILT.resetEase}ms cubic-bezier(0.23,1,0.32,1)`;
      card.style.transform  = '';
      glow.style.opacity = '0';
      const img = card.querySelector('.product-img-wrapper img');
      if (img) { img.style.transform = ''; img.style.transition = 'transform 0.7s ease'; }
      card.style.willChange = '';
    });
  });
}

/* Cat card glow */
function initCatCardGlow() {
  document.querySelectorAll('.cat-card').forEach(card => {
    const glow = card.querySelector('.cat-glow');
    if (!glow) return;
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
      card.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
    });
  });
}

/* Hero word rotation */
function initHeroWordRotation() {
  const el = document.querySelector('.hero-word');
  if (!el) return;
  const words = (el.dataset.words || '').split(',').map(w => w.trim());
  if (words.length < 2) return;
  let i = 0;
  setInterval(() => {
    i = (i + 1) % words.length;
    el.style.cssText = 'opacity:0;transform:translateY(10px);transition:opacity 0.28s ease,transform 0.28s ease';
    setTimeout(() => {
      el.textContent = words[i];
      el.style.cssText = 'opacity:1;transform:none;transition:opacity 0.28s ease,transform 0.28s ease';
    }, 290);
  }, 2800);
}

/* Confetti */
function launchConfetti() {
  const container = document.getElementById('confetti');
  if (!container) return;
  const colors = ['#d4a840','#f0c960','#4f8ef7','#3ecf8e','#f07878','#fde8a8'];
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.cssText = `left:${Math.random()*100}%;top:-20px;background:${colors[Math.floor(Math.random()*colors.length)]};width:${Math.random()*8+4}px;height:${Math.random()*8+4}px;border-radius:${Math.random()>0.5?'50%':'2px'};animation-duration:${Math.random()*2+1.5}s;animation-delay:${Math.random()*0.8}s;`;
    container.appendChild(p);
  }
  setTimeout(() => { if (container) container.innerHTML = ''; }, 4500);
}

/* Active nav links */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${e.target.id}`));
      }
    });
  }, { threshold: 0.4 });
  sections.forEach(s => obs.observe(s));
}

/* Debounce utility */
function debounce(fn, delay) {
  let t;
  return (...args) => { clearTimeout(t); t = setTimeout(() => fn(...args), delay); };
}

/* ============================================================
   13. MODALS
   ============================================================ */
function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('open');
  document.body.style.overflow = '';
}

/* ============================================================
   AUTH MODAL LOGIC
   ============================================================ */
function initAuthModal() {
  const overlay      = document.getElementById('authOverlay');
  const closeBtn     = document.getElementById('closeAuth');
  const tabs         = document.querySelectorAll('.auth-tab');
  const tabBar       = document.querySelector('.auth-tab-bar');
  const signinForm   = document.getElementById('signinFormEl');
  const signupForm   = document.getElementById('signupFormEl');
  const navAuthBtn   = document.getElementById('navAuthBtn');
  const siError      = document.getElementById('siError');
  const suError      = document.getElementById('suError');
  const pwInput      = document.getElementById('su-pass');

  if (!overlay) return;

  // Open auth modal (from nav button)
  navAuthBtn?.addEventListener('click', () => {
    const ov = document.getElementById('authOverlay');
    if (ov) { ov.classList.add('open'); document.body.style.overflow = 'hidden'; }
  });
  closeBtn?.addEventListener('click', () => {
    if (!authGateActive) {
      const ov = document.getElementById('authOverlay');
      if (ov) { ov.classList.remove('open'); document.body.style.overflow = ''; }
    }
  });

  // Tabs switching
  const tabsContainer = document.querySelector('.auth-tabs');
  function switchTab(tab) {
    tabs.forEach(t => { t.classList.toggle('active', t.dataset.tab === tab); t.setAttribute('aria-selected', String(t.dataset.tab === tab)); });
    if (tab === 'signup') {
      tabsContainer?.setAttribute('data-active', 'signup');
      signinForm.classList.add('hidden-form');
      signupForm.classList.remove('auth-form-hidden');
      signupForm.classList.add('auth-form');
      signupForm.classList.remove('hidden-form');
      signinForm.classList.remove('auth-form');
      signinForm.classList.add('auth-form-hidden');
    } else {
      tabsContainer?.setAttribute('data-active', 'signin');
      signinForm.classList.remove('hidden-form');
      signinForm.classList.add('auth-form');
      signinForm.classList.remove('auth-form-hidden');
      signupForm.classList.add('auth-form-hidden');
      signupForm.classList.remove('auth-form');
    }
    // Clear errors
    if (siError) siError.textContent = '';
    if (suError) suError.textContent = '';
  }

  tabs.forEach(t => t.addEventListener('click', () => switchTab(t.dataset.tab)));

  // Switch links inside forms
  document.querySelectorAll('.auth-link-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.to));
  });

  // Password eye toggles
  document.querySelectorAll('.pw-eye-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById(btn.dataset.for);
      if (!input) return;
      const isText = input.type === 'text';
      input.type = isText ? 'password' : 'text';
      btn.querySelector('.eye-open').style.display = isText ? '' : 'none';
      btn.querySelector('.eye-shut').style.display = isText ? 'none' : '';
    });
  });

  // Password strength on su-pass
  if (pwInput) {
    pwInput.addEventListener('input', () => renderPasswordStrength(pwInput.value));
  }

  // Sign In submit
  signinForm?.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('si-email')?.value.trim();
    const pass  = document.getElementById('si-pass')?.value;
    if (!email || !pass) { if(siError) siError.textContent = 'Please fill in all fields.'; return; }
    const result = auth.signin(email, pass);
    if (!result.ok) { if(siError) siError.textContent = result.error; return; }
    authGateActive = false;
    if (closeBtn) closeBtn.style.display = '';
    const ov = document.getElementById('authOverlay');
    if (ov) { ov.classList.remove('open'); document.body.style.overflow = ''; }
    syncAuthUI();
    showToast(`Welcome back, ${result.user.name}! 🥤`, 'success');
    // Re-trigger reveals and products now that content is unblocked
    setTimeout(() => {
      document.querySelectorAll('.reveal-up, .reveal-right').forEach(el => el.classList.add('visible'));
      try { renderProducts(); cart._updateBadges(); } catch(e) {}
    }, 100);
  });

  // Sign Up submit
  signupForm?.addEventListener('submit', e => {
    e.preventDefault();
    const name    = document.getElementById('su-name')?.value.trim();
    const email   = document.getElementById('su-email')?.value.trim();
    const pass    = document.getElementById('su-pass')?.value;
    const confirm = document.getElementById('su-confirm')?.value;

    if (!name)    { if(suError) suError.textContent = 'Please enter your name.'; return; }
    if (!email)   { if(suError) suError.textContent = 'Please enter your email.'; return; }
    if (pass.length < 6) { if(suError) suError.textContent = 'Password must be at least 6 characters.'; return; }
    if (pass !== confirm) { if(suError) suError.textContent = 'Passwords do not match.'; return; }

    const { level } = checkPasswordStrength(pass);
    if (level === 'weak') { if(suError) suError.textContent = 'Password is too weak. Please make it stronger.'; return; }

    const result = auth.signup(name, email, pass);
    if (!result.ok) { if(suError) suError.textContent = result.error; return; }
    authGateActive = false;
    if (closeBtn) closeBtn.style.display = '';
    const ov2 = document.getElementById('authOverlay');
    if (ov2) { ov2.classList.remove('open'); document.body.style.overflow = ''; }
    syncAuthUI();
    showToast(`Welcome to NXT-MART, ${result.user.name}! 🎉`, 'success');
    // Re-trigger reveals and products now that content is unblocked
    setTimeout(() => {
      document.querySelectorAll('.reveal-up, .reveal-right').forEach(el => el.classList.add('visible'));
      try { renderProducts(); cart._updateBadges(); } catch(e) {}
    }, 100);
  });
}

/* ============================================================
   14. CHECKOUT FORM VALIDATION
   ============================================================ */
function validateCheckout(form) {
  let valid = true;
  const fields = {
    fullName:    { el: form.querySelector('#fullName'),    msg: 'Full name is required.' },
    email:       { el: form.querySelector('#checkoutEmail'), msg: 'Valid email address required.' },
    address:     { el: form.querySelector('#address'),    msg: 'Address is required.' },
    city:        { el: form.querySelector('#city'),       msg: 'City is required.' },
    zipCode:     { el: form.querySelector('#zipCode'),    msg: 'Zip code is required.' },
    cardNumber:  { el: form.querySelector('#cardNumber'), msg: 'Valid card number required (16 digits).' },
    expiry:      { el: form.querySelector('#expiry'),     msg: 'Expiry in MM/YY format.' },
    cvv:         { el: form.querySelector('#cvv'),        msg: 'CVV must be 3 digits.' }
  };

  form.querySelectorAll('.form-error').forEach(e => e.textContent = '');
  form.querySelectorAll('input').forEach(i => i.classList.remove('error-field'));

  const setError = (k, m) => {
    if (fields[k].el) {
      fields[k].el.classList.add('error-field');
      const err = fields[k].el.nextElementSibling;
      if (err) err.textContent = m;
    }
    valid = false;
  };

  if (!fields.fullName.el?.value.trim()) setError('fullName', fields.fullName.msg);
  if (fields.email.el && !/\S+@\S+\.\S+/.test(fields.email.el.value)) setError('email', fields.email.msg);
  if (!fields.address.el?.value.trim()) setError('address', fields.address.msg);
  if (!fields.city.el?.value.trim()) setError('city', fields.city.msg);
  if (!fields.zipCode.el?.value.trim()) setError('zipCode', fields.zipCode.msg);
  if (fields.cardNumber.el && !/^\d{16}$/.test(fields.cardNumber.el.value.replace(/\s/g, ''))) setError('cardNumber', fields.cardNumber.msg);
  if (fields.expiry.el && !/^\d{2}\/\d{2}$/.test(fields.expiry.el.value)) setError('expiry', fields.expiry.msg);
  if (fields.cvv.el && !/^\d{3}$/.test(fields.cvv.el.value)) setError('cvv', fields.cvv.msg);

  return valid;
}

/* ============================================================
   15. REVIEWS CAROUSEL
   ============================================================ */
function initReviewsCarousel() {
  const track        = document.getElementById('reviewsTrack');
  const dotsContainer= document.getElementById('reviewsDots');
  if (!track) return;
  const cards = track.querySelectorAll('.review-card');
  const total = cards.length;
  let current = 0;

  for (let i = 0; i < total; i++) {
    const dot = document.createElement('div');
    dot.className = 'reviews-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('role', 'button');
    dot.setAttribute('aria-label', `Go to review ${i + 1}`);
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  }
  const dots = dotsContainer.querySelectorAll('.reviews-dot');

  function cardWidth() {
    const vw = window.innerWidth;
    if (vw <= 900) return window.innerWidth - 64;
    return (window.innerWidth - 80) / 3;
  }

  function goTo(idx) {
    current = ((idx % total) + total) % total;
    const cw = cardWidth(), gap = 22;
    track.style.transform = `translateX(-${current * (cw + gap)}px)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  let timer = setInterval(() => goTo(current + 1), 4200);
  track.addEventListener('mouseenter', () => clearInterval(timer));
  track.addEventListener('mouseleave', () => { timer = setInterval(() => goTo(current + 1), 4200); });

  let startX = 0;
  track.parentElement.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.parentElement.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  });
  window.addEventListener('resize', debounce(() => goTo(current), 200));
}

/* ============================================================
   16. OFFER COUNTDOWN TIMER
   ============================================================ */
function initOfferTimer() {
  const endTime = Date.now() + (8 * 3600 + 42 * 60 + 16) * 1000;
  function update() {
    const diff = Math.max(0, endTime - Date.now());
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const hEl = document.getElementById('t1h');
    const mEl = document.getElementById('t1m');
    const sEl = document.getElementById('t1s');
    if (hEl) hEl.textContent = String(h).padStart(2, '0');
    if (mEl) mEl.textContent = String(m).padStart(2, '0');
    if (sEl) sEl.textContent = String(s).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
}

/* ============================================================
   GLOBAL HELPER
   ============================================================ */
window.filterByCategory = function(cat) {
  activeFilters.categories = [cat];
  document.querySelectorAll('.catFilter').forEach(cb => { cb.checked = cb.value === cat; });
  document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
  renderProducts();
};

/* ============================================================
   19. INIT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Fail-safe wrapper ── */
  function safe(fn, label) {
    try { fn(); } catch(e) { console.warn('[NXT-MART] Init error in ' + (label || 'unknown') + ':', e); }
  }

  // ── Auth particle canvas background ──
  safe(function initAuthParticles() {
    const canvas = document.getElementById('authParticleCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let W, H, particles = [];

    function resize() {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize, { passive: true });

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.5 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        alpha: Math.random() * 0.5 + 0.15,
        gold: Math.random() > 0.6,
      });
    }

    let raf;
    function draw() {
      if (!document.getElementById('authOverlay')?.classList.contains('open')) {
        raf = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.gold
          ? `rgba(212,168,64,${p.alpha})`
          : `rgba(200,195,255,${p.alpha * 0.6})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    }
    draw();
  }, 'authParticles');

  // ── Show auth gate IMMEDIATELY — no preloader delay ──
  safe(function initAuthGate() {
    if (!auth.isLoggedIn()) {
      authGateActive = true;
      const closeBtn = document.getElementById('closeAuth');
      if (closeBtn) closeBtn.style.display = 'none';
      const overlay = document.getElementById('authOverlay');
      if (overlay) {
        overlay.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    }
  }, 'authGate');

  // ── Offline game detector ──
  safe(checkOnline, 'checkOnline');

  // ── Build filters + render products ──
  safe(buildCategoryFilters, 'buildCategoryFilters');
  // Render products immediately — no skeleton delay
  safe(() => { renderProducts(); cart._updateBadges(); }, 'renderProducts');
  // Fallback re-render in case anything was blocked
  setTimeout(() => safe(() => { renderProducts(); cart._updateBadges(); }, 'renderProductsFallback'), 500);

  // ── Auth ──
  safe(initAuthModal, 'initAuthModal');
  safe(syncAuthUI, 'syncAuthUI');

  // ── Profile panel ──
  safe(initProfilePanel, 'initProfilePanel');

  // ── Hero particles ──
  safe(initHeroParticles, 'initHeroParticles');

  // ── Hero parallax (product scene) ──
  safe(initHeroParallax, 'initHeroParallax');

  // ── Scroll reveal ──
  safe(initScrollReveal, 'initScrollReveal');

  // ── Hero word rotation ──
  safe(initHeroWordRotation, 'initHeroWordRotation');

  // ── Reviews carousel ──
  safe(initReviewsCarousel, 'initReviewsCarousel');

  // ── Offer timer ──
  safe(initOfferTimer, 'initOfferTimer');

  // ── Card tilt ──
  setTimeout(() => safe(attachTiltToCards, 'attachTiltToCards'), 600);

  // ── Category card glow ──
  safe(initCatCardGlow, 'initCatCardGlow');

  // ── Search autocomplete ──
  safe(initSearchAutocomplete, 'initSearchAutocomplete');

  // ── Active nav links ──
  safe(initActiveNavLinks, 'initActiveNavLinks');

  // ── Welcome toast (only when logged in, after auth dismiss) ──
  if (auth.isLoggedIn()) {
    setTimeout(() => safe(() => showToast('Welcome back to NXT-MART 🥤', 'success'), 'welcomeToast'), 500);
  }

  // ── Navbar scroll behavior ──
  safe(function() {
    const navbar   = document.getElementById('navbar');
    const scrollTopBtn = document.getElementById('scrollTop');
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      navbar?.classList.toggle('scrolled', y > 20);
      scrollTopBtn?.classList.toggle('visible', y > 500);
    }, { passive: true });
    scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }, 'navbarScroll');

  // ── Search toggle ──
  safe(function() {
    const searchToggle = document.getElementById('searchToggle');
    const searchClose  = document.getElementById('searchClose');
    const navSearchBar = document.getElementById('navSearchBar');
    const searchInput  = document.getElementById('searchInput');

    searchToggle?.addEventListener('click', () => {
      const isOpen = navSearchBar?.classList.toggle('open');
      if (isOpen) setTimeout(() => searchInput?.focus(), 80);
    });

    searchClose?.addEventListener('click', () => {
      navSearchBar?.classList.remove('open');
      if (searchInput) searchInput.value = '';
      activeFilters.search = '';
      renderProducts();
      const rl = document.getElementById('searchResultsList');
      if (rl) rl.style.display = 'none';
    });

    document.addEventListener('click', e => {
      if (navSearchBar && !navSearchBar.contains(e.target) && !searchToggle?.contains(e.target)) {
        navSearchBar.classList.remove('open');
      }
    });
  }, 'searchToggle');

  // ── Category cards ──
  safe(function() {
    document.querySelectorAll('.cat-card').forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.dataset.category;
      const isActive = card.classList.contains('active');
      document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
      if (isActive) {
        activeFilters.categories = [];
        document.querySelectorAll('.catFilter').forEach(cb => cb.checked = false);
      } else {
        card.classList.add('active');
        activeFilters.categories = [cat];
        document.querySelectorAll('.catFilter').forEach(cb => { cb.checked = cb.value === cat; });
      }
      document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
      renderProducts();
    });  // closes click handler
  });   // closes forEach callback
  }, 'categoryCards');  // closes safe()


  // ── Price range + filters + sort ──
  safe(function() {
    document.getElementById('priceRange')?.addEventListener('input', e => {
      activeFilters.maxPrice = Number(e.target.value);
      const pv = document.getElementById('priceValue');
      if (pv) pv.textContent = `₹${e.target.value}`;
      renderProducts();
    });

    document.querySelectorAll('.ratingFilter').forEach(cb => {
      cb.addEventListener('change', () => {
        activeFilters.ratings = [...document.querySelectorAll('.ratingFilter:checked')].map(c => c.value);
        renderProducts();
      });
    });

    document.getElementById('sortSelect')?.addEventListener('change', e => {
      currentSort = e.target.value;
      renderProducts();
    });

    document.getElementById('resetFilters')?.addEventListener('click', () => {
      activeFilters = { search: '', maxPrice: 500, categories: [], ratings: [] };
      const si = document.getElementById('searchInput');
      if (si) si.value = '';
      const pr = document.getElementById('priceRange');
      if (pr) pr.value = 500;
      const pv = document.getElementById('priceValue');
      if (pv) pv.textContent = '₹500';
      document.querySelectorAll('.catFilter, .ratingFilter').forEach(cb => cb.checked = false);
      document.querySelectorAll('.cat-card').forEach(c => c.classList.remove('active'));
      const ss = document.getElementById('sortSelect');
      if (ss) ss.value = 'default';
      currentSort = 'default';
      renderProducts();
    });
  }, 'filters');

  // ── Cart / Checkout / Modals ──
  safe(function() {
    document.getElementById('cartBtn')?.addEventListener('click', () => {
    renderCartItems();
    openModal('cartOverlay');
  });

  // ── Close cart ──
  document.getElementById('closeCart')?.addEventListener('click', () => closeModal('cartOverlay'));
  document.getElementById('cartOverlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('cartOverlay')) closeModal('cartOverlay');
  });

  // ── Proceed to Checkout ──
  document.getElementById('checkoutBtn')?.addEventListener('click', () => {
    if (!cart.items.length) { showToast('Your cart is empty! Add some drinks first.', 'error'); return; }
    closeModal('cartOverlay');
    openModal('checkoutOverlay');
  });

  // ── Close checkout ──
  document.getElementById('closeCheckout')?.addEventListener('click', () => closeModal('checkoutOverlay'));
  document.getElementById('checkoutOverlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('checkoutOverlay')) closeModal('checkoutOverlay');
  });

  // ── Checkout form submit ──
  document.getElementById('checkoutForm')?.addEventListener('submit', e => {
    e.preventDefault();
    if (!validateCheckout(e.target)) return;
    const orderNum = 'NXT-' + Date.now().toString(36).toUpperCase().slice(-6);
    const orderEl = document.getElementById('orderNumber');
    if (orderEl) orderEl.textContent = `Order #${orderNum} is confirmed & on its way! 🚀`;
    closeModal('checkoutOverlay');
    cart.clear();
    launchConfetti();
    openModal('successOverlay');
  });

  // ── Card number auto-formatting (1234 5678 9012 3456) ──
  document.getElementById('cardNumber')?.addEventListener('input', e => {
    e.target.value = e.target.value
      .replace(/\D/g, '')
      .replace(/(\d{4})(?=\d)/g, '$1 ')
      .slice(0, 19);
  });

  // ── Expiry auto-formatting (MM/YY) ──
  document.getElementById('expiry')?.addEventListener('input', e => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length >= 2) v = v.slice(0, 2) + '/' + v.slice(2, 4);
    e.target.value = v;
  });

  // ── CVV — digits only ──
  document.getElementById('cvv')?.addEventListener('input', e => {
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 3);
  });

  // ── Success modal close ──
  document.getElementById('closeSuccess')?.addEventListener('click', () => closeModal('successOverlay'));
  document.getElementById('successOverlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('successOverlay')) closeModal('successOverlay');
  });

  // ── Quick View close ──
  document.getElementById('closeQuickView')?.addEventListener('click', () => closeModal('quickViewOverlay'));
  document.getElementById('quickViewOverlay')?.addEventListener('click', e => {
    if (e.target === document.getElementById('quickViewOverlay')) closeModal('quickViewOverlay');
  });

  // ── Global ESC key closes any open modal ──
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      ['cartOverlay', 'checkoutOverlay', 'quickViewOverlay', 'successOverlay'].forEach(closeModal);
      if (!authGateActive) closeModal('authOverlay');
    }
  });
  }, 'cartCheckoutModals');

});
// ============================================================
// NXT-MART — World-Class Premium Edition v4.0 JavaScript
// (Add these enhancements inside the existing DOMContentLoaded)
// ============================================================

/* ── ENHANCED AUTH PARTICLES (with connecting lines) ── */
safe(function initAuthParticles() {
  const canvas = document.getElementById('authParticleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], raf;

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  for (let i = 0; i < 80; i++) {
    particles.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.6 + 0.2,
      gold: Math.random() > 0.7,
    });
  }

  function draw() {
    if (!document.getElementById('authOverlay')?.classList.contains('open')) {
      raf = requestAnimationFrame(draw);
      return;
    }
    ctx.clearRect(0, 0, W, H);

    // Update and draw particles
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.gold
        ? `rgba(212,168,64,${p.alpha})`
        : `rgba(200,195,255,${p.alpha * 0.5})`;
      ctx.fill();
    });

    // Draw faint connections between nearby particles
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(212,168,64,${0.03 * (1 - dist/120)})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }
    }

    raf = requestAnimationFrame(draw);
  }
  draw();
}, 'authParticlesEnhanced');

/* ── 3D TILT ON AUTH CARD ── */
safe(function initAuthCardTilt() {
  const card = document.getElementById('authGlassCard');
  if (!card) return;

  let raf = null;
  let mouseX = 0, mouseY = 0;
  let currentRotateX = 0, currentRotateY = 0;

  const updateMouse = (e) => {
    const rect = card.getBoundingClientRect();
    mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 to 1
    mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    // Update CSS custom properties for the border glow
    card.style.setProperty('--mouse-x', e.clientX - rect.left + 'px');
    card.style.setProperty('--mouse-y', e.clientY - rect.top + 'px');
  };

  card.addEventListener('mousemove', (e) => {
    updateMouse(e);
    if (raf) cancelAnimationFrame(raf);
    raf = requestAnimationFrame(() => {
      const rotateY = mouseX * 6;   // max ±6deg
      const rotateX = -mouseY * 5;  // max ±5deg
      card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.01)`;
    });
  });

  card.addEventListener('mouseleave', () => {
    if (raf) cancelAnimationFrame(raf);
    card.style.transform = '';
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  });
}, 'authCardTilt');

/* ── SMOOTHER FORM SWITCHING WITH 3D EFFECT ── */
// Override the switchTab function inside initAuthModal with enhanced transitions
// Find the existing switchTab function and replace with:

function switchTab(tab) {
  tabs.forEach(t => {
    t.classList.toggle('active', t.dataset.tab === tab);
    t.setAttribute('aria-selected', String(t.dataset.tab === tab));
  });
  if (tab === 'signup') {
    tabsContainer?.setAttribute('data-active', 'signup');
    signinForm.classList.add('auth-form-hidden');
    signinForm.classList.remove('auth-form');
    signupForm.classList.remove('auth-form-hidden');
    signupForm.classList.add('auth-form');
    // Animate entrance
    signupForm.style.transform = 'rotateY(0deg) translateX(0) scale(1)';
  } else {
    tabsContainer?.setAttribute('data-active', 'signin');
    signinForm.classList.remove('auth-form-hidden');
    signinForm.classList.add('auth-form');
    signupForm.classList.add('auth-form-hidden');
    signupForm.classList.remove('auth-form');
    signinForm.style.transform = 'rotateY(0deg) translateX(0) scale(1)';
  }
  // Clear errors
  if (siError) siError.textContent = '';
  if (suError) suError.textContent = '';
}
