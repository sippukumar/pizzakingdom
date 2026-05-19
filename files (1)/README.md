# 🍕 Pizza Kingdom Website — Setup Guide

## Project Structure

```
pizza-kingdom/
├── index.html      ← Main HTML file
├── style.css       ← All styles (light 3D theme)
├── script.js       ← Interactivity & menu logic
└── README.md       ← This guide
```

---

## 🚀 Method 1 — Open Directly (Fastest)

1. Download all 3 files into one folder
2. Double-click `index.html`
3. Opens in your browser instantly ✅

**No server needed. No installation needed.**

---

## 🖥️ Method 2 — Live Server (Recommended for Development)

### Prerequisites
- Install [VS Code](https://code.visualstudio.com/)
- Install the **Live Server** extension (by Ritwick Dey)

### Steps
```bash
1. Open VS Code
2. File → Open Folder → Select "pizza-kingdom" folder
3. Right-click index.html → "Open with Live Server"
4. Website opens at: http://127.0.0.1:5500
```
Auto-refreshes on every file save ✅

---

## 🐍 Method 3 — Python Local Server

```bash
# Navigate to folder
cd pizza-kingdom

# Python 3
python -m http.server 8000

# Open browser at:
http://localhost:8000
```

---

## 📁 How to Customize

### Change Restaurant Name
In `index.html`, search: `Pizza Kingdom`
Replace with your restaurant name everywhere.

### Change Colors
In `style.css`, edit the `:root` variables at the top:
```css
:root {
  --orange: #FF6B2C;   /* Main brand color */
  --red:    #E8321A;   /* Accent color */
  --gold:   #F5A623;   /* Gold highlights */
  --cream:  #FFF8F0;   /* Background */
}
```

### Add More Pizzas
In `script.js`, add to the `pizzas` array:
```js
{
  name: "Your Pizza Name",
  desc: "Short description here.",
  price: "₹XXX",
  img: "URL to pizza image",
  tags: ["veg"],           // veg | nonveg | special
  badges: [{ label: "Veg", cls: "badge-veg" }],
},
```

### Change Contact Info
In `index.html`, find the `contact-info` div and update:
- Address, Phone, Hours, Email

---

## 🌐 Deploy to Internet (Free)

### Option A — GitHub Pages
1. Create GitHub account
2. New repo → Upload all 3 files
3. Settings → Pages → Deploy from main branch
4. Your site: `https://yourusername.github.io/pizza-kingdom`

### Option B — Netlify (Easiest)
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `pizza-kingdom` folder
3. Live in 30 seconds with a free URL ✅

### Option C — Vercel
```bash
npm i -g vercel
cd pizza-kingdom
vercel
```

---

## ✅ Features Included

| Feature | Status |
|---|---|
| Responsive Design (Mobile/Tablet/Desktop) | ✅ |
| 3D Floating Pizza Animation | ✅ |
| Light Cream/Orange Color Theme | ✅ |
| Scroll Reveal Animations | ✅ |
| Menu Filtering (Veg/Non-Veg/Special) | ✅ |
| Add to Cart Toast Notification | ✅ |
| Order Form with Validation | ✅ |
| Mobile Hamburger Menu | ✅ |
| Sticky Navbar with Scroll Effect | ✅ |
| Google Fonts (Playfair Display + Nunito) | ✅ |
| CSS 3D Shadows & Depth Effects | ✅ |
| Floating Badges on Hero Pizza | ✅ |
| Customer Testimonials Section | ✅ |
| Footer with Links | ✅ |

---

## 🔧 Browser Support

| Browser | Support |
|---|---|
| Chrome | ✅ Full |
| Firefox | ✅ Full |
| Edge | ✅ Full |
| Safari | ✅ Full |
| Mobile Chrome | ✅ Full |

---

Made with ❤️ for Pizza Kingdom 🍕
