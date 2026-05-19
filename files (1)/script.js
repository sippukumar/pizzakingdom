// =====================================================
//  PIZZA KINGDOM — JavaScript
// =====================================================

// ── MENU DATA ──────────────────────────────────────
const pizzas = [
  {
    name: "Margherita Classic",
    desc: "San Marzano tomato, fresh mozzarella, basil, and extra virgin olive oil.",
    price: "₹299",
    img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
    tags: ["veg"],
    badges: [{ label: "Veg", cls: "badge-veg" }],
  },
  {
    name: "Truffle Royale",
    desc: "Black truffle, burrata, wild mushrooms, thyme, aged parmesan.",
    price: "₹649",
    img: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80",
    tags: ["special"],
    badges: [{ label: "⭐ Special", cls: "badge-special" }],
  },
  {
    name: "BBQ Chicken Deluxe",
    desc: "Smoked BBQ sauce, pulled chicken, red onions, jalapeños, cheddar.",
    price: "₹499",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
    tags: ["nonveg"],
    badges: [{ label: "Non-Veg", cls: "badge-nonveg" }],
  },
  {
    name: "Garden Paradise",
    desc: "Zucchini, roasted peppers, cherry tomatoes, spinach, feta cheese.",
    price: "₹349",
    img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
    tags: ["veg"],
    badges: [{ label: "Veg", cls: "badge-veg" }, { label: "New", cls: "badge-new" }],
  },
  {
    name: "Pepperoni King",
    desc: "Double pepperoni, tomato base, mozzarella blend, chilli flakes.",
    price: "₹549",
    img: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
    tags: ["nonveg"],
    badges: [{ label: "Non-Veg", cls: "badge-nonveg" }, { label: "🔥 Hot", cls: "badge-special" }],
  },
  {
    name: "Paneer Tikka Special",
    desc: "Tandoori paneer, capsicum, onion, mint chutney base, amul cheese.",
    price: "₹399",
    img: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=400&q=80",
    tags: ["veg", "special"],
    badges: [{ label: "Veg", cls: "badge-veg" }, { label: "⭐ Special", cls: "badge-special" }],
  },
  {
    name: "Prawn Inferno",
    desc: "Garlic butter prawns, nduja, smoked paprika, fresh lemon zest.",
    price: "₹699",
    img: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400&q=80",
    tags: ["nonveg", "special"],
    badges: [{ label: "Non-Veg", cls: "badge-nonveg" }, { label: "New", cls: "badge-new" }],
  },
  {
    name: "Four Cheese Dream",
    desc: "Mozzarella, gorgonzola, gouda, parmesan, honey drizzle, walnuts.",
    price: "₹449",
    img: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=400&q=80",
    tags: ["veg", "special"],
    badges: [{ label: "Veg", cls: "badge-veg" }, { label: "⭐ Special", cls: "badge-special" }],
  },
];

// ── RENDER MENU ────────────────────────────────────
function renderMenu(filter = "all") {
  const grid = document.getElementById("menuGrid");
  const filtered = filter === "all" ? pizzas : pizzas.filter((p) => p.tags.includes(filter));

  grid.innerHTML = filtered
    .map(
      (pizza) => `
    <div class="menu-card reveal">
      <div style="overflow:hidden;height:200px;">
        <img class="menu-card-img" src="${pizza.img}" alt="${pizza.name}" loading="lazy"/>
      </div>
      <div class="menu-card-body">
        <div class="card-badges">
          ${pizza.badges.map((b) => `<span class="badge ${b.cls}">${b.label}</span>`).join("")}
        </div>
        <h3>${pizza.name}</h3>
        <p>${pizza.desc}</p>
        <div class="card-footer">
          <span class="price">${pizza.price}</span>
          <button class="add-btn" onclick="addToCart('${pizza.name}', '${pizza.price}')">+ Add</button>
        </div>
      </div>
    </div>
  `
    )
    .join("");

  // Re-observe new cards
  observeReveal();
}

// ── TABS ───────────────────────────────────────────
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    this.classList.add("active");
    renderMenu(this.dataset.tab);
  });
});

// ── CART NOTIFICATION ──────────────────────────────
function addToCart(name, price) {
  const toast = document.createElement("div");
  toast.style.cssText = `
    position:fixed; bottom:30px; left:50%; transform:translateX(-50%) translateY(0);
    background:linear-gradient(135deg,#FF6B2C,#E8321A); color:#fff;
    padding:14px 28px; border-radius:50px; font-weight:700; font-size:0.95rem;
    box-shadow:0 8px 30px rgba(255,107,44,0.45); z-index:9999;
    animation:toastIn 0.4s ease;
    font-family:'Nunito',sans-serif;
  `;
  toast.textContent = `🍕 ${name} added! (${price})`;
  document.body.appendChild(toast);

  const style = document.createElement("style");
  style.textContent = `
    @keyframes toastIn { from { opacity:0; transform:translateX(-50%) translateY(20px); } to { opacity:1; transform:translateX(-50%) translateY(0); } }
  `;
  document.head.appendChild(style);

  setTimeout(() => toast.remove(), 2800);
}

// ── SCROLL REVEAL ──────────────────────────────────
function observeReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// ── NAVBAR SCROLL ──────────────────────────────────
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 60) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
});

// ── MOBILE MENU ────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => mobileMenu.classList.add("open"));
closeMenu.addEventListener("click", () => mobileMenu.classList.remove("open"));
function closeMobileMenu() { mobileMenu.classList.remove("open"); }

// ── ORDER FORM ─────────────────────────────────────
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const btn = this.querySelector("button[type=submit]");
  btn.textContent = "✅ Order Placed! We'll call you shortly.";
  btn.style.background = "linear-gradient(135deg,#3AB77D,#2D9966)";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = "👑 Place Royal Order";
    btn.style.background = "";
    btn.disabled = false;
    this.reset();
  }, 4000);
});

// ── INIT ───────────────────────────────────────────
renderMenu();

// Mark static reveal elements
document.querySelectorAll(
  ".feature-item, .tcard, .about-content, .about-img-wrap, .contact-left, .contact-right, .footer-brand, .footer-links"
).forEach((el) => el.classList.add("reveal"));

observeReveal();
