# 🎸 Imagine Dragons — Landing Page

Landing page para la banda de rock **Imagine Dragons**, desarrollada para la prueba de desempeño en Modulo 2.

---

## 📋 Descripción

Sitio web es una landing page que presenta información sobre la banda, sus próximos eventos, sección multimedia y redes sociales y multimedia. El diseño sigue la metodología **Mobile First** y es completamente **responsive**.

---

## 🛠️ Tecnologías utilizadas

- **HTML5** — Estructura semántica
- **CSS3** — Estilos, Flexbox, Grid, Media Queries
- **JavaScript** (Vanilla) — Interactividad (menú hamburguesa, scroll suave)
- **Google Fonts** — Oswald, Open Sans

---

## 📁 Estructura del proyecto
```
project/
├── index.html             # Página principal del portafolio
├── README.md
├── public/
│   ├── icons/             # Logo de la banda
│   └── imgs/              # Imágenes de Albumes de la banda
├── src/
│   ├── css/
│   │   ├── styles.css           # Hoja de estilos principal
│   │   ├── header.css           # Navegación y header
│   │   ├── hero.css             # Seccion Hero/landing
│   │   ├── events.css           # Upcoming Events
│   │   ├── about.css            # Seccion sobre la banda
│   │   ├── multimedia.css       # Seccion Imagenes de albumes
│   │   └── footer.css           # Footer section
│   ├── js/
│   │   └── menuHamburguesa.js   # Toggle del menú móvil
│   └── views/
│       └──                      # No hay pagina secundaria o vinculada

```
---

## 🧩 Secciones de la página

| Sección | Etiqueta HTML | Descripción |
|---|---|---|
| Header | `<header>` | Logo, navegación con Flexbox, menú hamburguesa en mobile |
| Hero | `<section class="hero">` | Imagen de fondo, título con tipografía bold, botón CTA |
| Events | `<section class="events">` | Tabla HTML (`<thead>`, `<tbody>`) en desktop, tarjetas en mobile |
| About | `<section class="about">` | Imagen de la banda, descripción, lista desordenada de valores |
| Multimedia | `<section class="multimedia">` | Grid de imágenes e iframe de YouTube |
| Footer | `<footer>` | Información organizada en columnas con Grid |

---

## 📱 Responsive Design

- **Mobile (< 768px):** Menú hamburguesa, layout en columna, tabla adaptada a tarjetas
- **Tablet (768px - 1023px):** Grid multimedia de 4 columnas
- **Desktop (≥ 1024px):** Navegación horizontal, sección about en fila, tabla completa visible

---

## 🚀 Cómo ejecutar

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/smendozab097/Prueba_desempe-o_html_css.git
   ```
Abrir index.html en cualquier navegador o puedes usar Live Server en visual studio
No requiere instalación de dependencias ni servidor.

✨ Características destacadas
✅ Metodología Mobile First

✅ Etiquetas HTML semánticas ("header", "section", "footer", "nav")

✅ Tabla HTML con "thead" y "tbody"

✅ Lista desordenada para valores de la banda

✅ CSS Grid en multimedia y footer

✅ Flexbox en header y about

✅ Menú hamburguesa funcional con JavaScript

✅ Scroll suave con offset para header fijo

✅ Iframe de YouTube embebido

✅ Hover effects en navegación y botones

## 👤 Autor
Desarrollado por Sebastian Mendoza Brieva — 2026
