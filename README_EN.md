# 🎸 Imagine Dragons — Landing Page

Landing page for the rock band **Imagine Dragons**, developed as the performance test for Module 2.

---

## 📋 Description

This website is a landing page that presents information about the band, their upcoming events, a multimedia section and social links. The design follows a **Mobile First** approach and is fully **responsive**.

---

## 🛠️ Technologies used

- **HTML5** — Semantic structure
- **CSS3** — Styles, Flexbox, Grid, Media Queries
- **JavaScript** (Vanilla) — Interactivity (hamburger menu, smooth scroll)
- **Google Fonts** — Oswald, Open Sans

---

## 📁 Project structure
```
project/
├── index.html             # Main landing page
├── README.md
├── README_EN.md
├── public/
│   ├── icons/             # Band logo
│   └── imgs/              # Album images
├── src/
│   ├── css/
│   │   ├── styles.css           # Main stylesheet
│   │   ├── header.css           # Navigation and header
│   │   ├── hero.css             # Hero/landing section
│   │   ├── events.css           # Upcoming events
│   │   ├── about.css            # About the band
│   │   ├── multimedia.css       # Album images section
│   │   └── footer.css           # Footer section
│   ├── js/
│   │   └── menuHamburguesa.js   # Mobile menu toggle
│   └── views/
│       └──                      # No secondary or linked pages

```
---

## 🧩 Page sections

| Section | HTML Tag | Description |
|---|---|---|
| Header | `<header>` | Logo, navigation using Flexbox, hamburger menu on mobile |
| Hero | `<section class="hero">` | Background image, bold title, CTA button |
| Events | `<section class="events">` | HTML table (`<thead>`, `<tbody>`) on desktop, cards on mobile |
| About | `<section class="about">` | Band photo, description, unordered list of values |
| Multimedia | `<section class="multimedia">` | Image grid and embedded YouTube iframe |
| Footer | `<footer>` | Information organized in columns using Grid |

---

## 📱 Responsive Design

- **Mobile (< 768px):** Hamburger menu, column layout, table adapted to cards
- **Tablet (768px - 1023px):** Multimedia grid with 4 columns
- **Desktop (≥ 1024px):** Horizontal navigation, about section in a row, full table visible

---

## 🚀 How to run

1. Clone the repository:
   ```bash
   git clone https://github.com/smendozab097/Prueba_desempe-o_html_css.git
   ```
2. Open `index.html` in any browser or use Live Server in Visual Studio Code.

No dependencies or server installation required.

✨ Highlights
✅ Mobile First methodology

✅ Semantic HTML tags (header, section, footer, nav)

✅ HTML table with `thead` and `tbody`

✅ Unordered list for the band’s values

✅ CSS Grid in multimedia and footer

✅ Flexbox in header and about sections

✅ Functional hamburger menu with JavaScript

✅ Smooth scroll with offset for fixed header

✅ Embedded YouTube iframe

✅ Hover effects on navigation and buttons

## 👤 Author
Developed by Sebastian Mendoza Brieva — 2026